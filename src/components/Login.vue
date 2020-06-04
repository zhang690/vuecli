<template>
  <div>
    <!-- 返回按钮 -->
    <div class="back iconfont" @click="goBack">&#xe614;</div>
    <!-- 标题 -->
    <div class="title">
      <div class="title-big">登录/注册</div>
      <div class="title-disc">未注册用户验证后自动登录</div>
    </div>
    <!-- 输入框 -->
    <div class="put">
      <!-- 电话号码输入框 -->
      <div class="put-phone">
        <div class="put-phone-country">+86</div>
        <div class="put-phone-line"></div>
        <div class="put-phone-in">
          <input
            :class="phoneIsActive?'put-active':'put-blur'"
            v-model="phoneValue"
            type="number"
            placeholder="请输入手机号码"
          />
        </div>
      </div>
      <!-- 验证码输入框 -->
      <div class="put-code">
        <div class="put-code-in">
          <input
            :class="verifyIsActive?'put-active':'put-blur'"
            v-model="verifyValue"
            type="number"
            placeholder="短信验证码"
          />
        </div>
        <div
          class="put-code-send"
          :class="{'put-code-send-active':hasSend}"
          v-text="sendText"
          @click="send"
        ></div>
        <!-- 发送验证码前验证手机号 -->
        <div class="put-checkPhone">
          <div class="put-checkPhone-error" v-if="isError" v-text="phoneError"></div>
          <!-- <div class="put-checkPhone-error"></div> -->
        </div>
      </div>
    </div>
    <!-- 注册登录提交按钮 -->
    <div class="present">
      <div :class="['present-affirm',{'present-affirm-active':verifyIsReady}]" @click="goHomePage">登录/注册</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneIsActive: false,
      verifyIsActive: false,
      verifyIsReady:false,
      phoneValue: "",
      verifyValue: "",
      hasSend: false,
      sendText: "发送验证码",
      timeId: null,
      time: 5,
      isError:false,
      outTimeId:null,
      phoneError:'号码格式不正确'
    };
  },
  updated() {
    if(this.phoneValue.length>=11 && this.verifyValue.length >=6){
      this.verifyIsReady = true
    }else{
      this.verifyIsReady = false
    }
  },
  watch: {
    phoneValue() {
      if (this.phoneValue) {
        this.phoneIsActive = true
        if(this.phoneValue.length >= 11){
          this.phoneValue = this.phoneValue.slice(0,11)
        }
      } else {
        this.phoneIsActive = false
      }
    },
    verifyValue() {
      if (this.verifyValue) {
        this.verifyIsActive = true
        if(this.verifyValue.length >= 6){
          this.verifyValue = this.verifyValue.slice(0,6)
        }
      } else {
        this.verifyIsActive = false
      }
    }
  },
  methods: {
    // 返回按钮回退一层
    goBack() {
      this.$router.go(-1)
    },
    // 发送验证码
    send() {
      if(this.outTimeId){
        clearTimeout(this.outTimeId)
      }
      if(this.phoneValue){
        if(!(/^1[3456789]\d{9}$/.test(this.phoneValue))){
          this.isError = true
          this.phoneError = '号码格式不正确'
          this.outTimeId = setTimeout(() => {
            this.isError = false
          }, 1500);
          return console.log("号码格式不正确");
        }
      }else{
        this.isError = true
          this.phoneError = '请输入手机号码'
          this.outTimeId = setTimeout(() => {
            this.isError = false
          }, 1500);
        return console.log("请输入手机号码");
      }
      if (!this.hasSend) {
        this.verifyValue = ''
        this.sendText = "倒计时"+this.time+"秒"
        this.hasSend = true
        this.verifyIsReady = false
        if (this.timeId) {
          clearTimeout(this.timeId)
        }
        this.timeId = setInterval(() => {
          this.time--
          this.sendText = "倒计时"+this.time+"秒"
          if (this.time === -1) {
            this.sendText = "发送验证码"
            this.time = 5
            this.hasSend = false
            clearInterval(this.timeId)
          }
        }, 1000)
      } else {
        return
      }
    },
    goHomePage(){
      if(this.verifyIsReady){
        this.$router.push('/HomePage')
      }else{
        return
      }
    }
  }
};
</script>

<style>
</style>