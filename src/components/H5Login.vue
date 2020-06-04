<template>
  <div :class="isShow?'show-h5-login':'hide-h5-login'">
    <div>
      <div class="login-h5">
        <span class="iconfont icon" @click="changeIsH5">&#xe614;</span>
        <div class="login-h5-title">
          绑定手机号完成注册
        </div>
      </div>

      <!-- h5-put -->
      <div class="h5-put">
        <div class="h5-put-phone">
          <div>+86</div>
          <div>
            <input v-model='phoneNumber' :class="phonePutActive?'active':'blur'" type="number" placeholder="请输入手机号">
          </div>
        </div>
        <div class="h5-put-verify">
          <div>
            <input v-model='verifyNumber' :class="phonePutActive?'active':'blur'" type="number" placeholder="短信验证码">
          </div>
          <div @click="sendVerify" ref="forbidden" :class="isForbidden?'h5-isForbidden':'h5-noForbidden'" v-text="verify"></div>
        </div>
      </div>
      <!-- finish -->
      <div :class="['h5-finish',{'h5-finish-active':h5VerifyIsReady}]">完成</div>
      <!-- login-h5-remind -->
      <div class="login-h5-remind" v-if="isError">
        <div v-text="phoneError"></div>
      </div>


    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        phoneNumber: '',
        phonePutActive: false,
        verifyNumber: '',
        outTimeId: null,
        isError: false,
        sendText: 6,
        phoneError: '',
        isForbidden: false,
        downTime: null,
        hasSend: false,
        time: 5,
        verify: '获取验证码',
        h5VerifyIsReady: false
      }
    },
    updated(){
      if(this.phoneNumber.length >= 11 && this.verifyNumber.length >= 6){
        this.h5VerifyIsReady = true
      }else{
        this.h5VerifyIsReady = false
      }
    },
    watch: {
      phoneNumber() {
        if (this.phoneNumber) {
          this.phonePutActive = true
          if (this.phoneNumber.length >= 11) {
            this.phoneNumber = this.phoneNumber.slice(0, 11)
          }
        } else {
          this.phonePutActive = false
        }
      },
      verifyNumber() {
        if (this.verifyNumber) {
          this.phonePutActive = true
          if (this.verifyNumber.length >= 6) {
            this.verifyNumber = this.verifyNumber.slice(0, 6)
          }
        } else {
          this.phonePutActive = false
        }
      }
    },
    props: ['isShow'],
    methods: {
      changeIsH5() {
        this.$emit('myEven', {
          boo: false
        })
      },
      sendVerify() {
        if (this.outTimeId) {
          clearTimeout(this.outTimeId)
        }
        if (this.phoneNumber) {
          if (!(/^1[3456789]\d{9}$/.test(this.phoneNumber))) {
            this.isError = true
            this.phoneError = '号码格式不正确'
            this.outTimeId = setTimeout(() => {
              this.isError = false
            }, 1500);
            return console.log("号码格式不正确");
          }
        } else {
          this.isError = true
          this.phoneError = '请输入手机号码'
          this.outTimeId = setTimeout(() => {
            this.isError = false
          }, 1500);
          return console.log("请输入手机号码");
        }
        if (this.hasSend) {
          return
        }
        this.isForbidden = true
        this.hasSend = true
        this.verify = '倒计时' + this.time + '秒'
        this.downTime = setInterval(() => {
          this.time--
          this.verify = '倒计时' + this.time + '秒'
          if (this.time === -1) {
            this.isForbidden = false
            this.hasSend = false
            this.time = 5
            this.verify = '获取验证码'
            clearInterval(this.downTime)

          }
        }, 1000)




      }
    }
  }
</script>
<style>
  .show-h5-login {
    z-index: 1;
    background: rgba(247, 247, 247, 1);
    border-radius: 24px 24px 0px 0px;
    width: 100%;
    position: fixed;
    height: 50%;
    bottom: 0;
    transform: translateY(100%);
    animation: popup .3s linear forwards;
  }

  .hide-h5-login {
    z-index: 1;
    background: rgba(247, 247, 247, 1);
    border-radius: 24px 24px 0px 0px;
    width: 100%;
    position: fixed;
    height: 50%;
    bottom: 0;
    animation: hide .3s linear forwards;
  }

  @keyframes popup {
    0% {}

    100% {
      transform: translateY(0);
    }
  }

  @keyframes hide {
    0% {}

    100% {
      transform: translateY(100%);
    }
  }

  .login-h5 {
    display: flex;
    align-items: center;
    margin-top: 50px;
    height: 40px;
    margin-left: 31px;
  }

  .login-h5 .icon {
    height: 31px;
    font-size: 34px;
    line-height: 34px;
  }

  .login-h5-title {
    letter-spacing: 2px;
    font-size: 34px;
    margin-left: 23px;
    line-height: 34px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }

  /* h5-put */
  .h5-put {
    margin: 110px 32px 0;
  }

  .h5-put-phone,
  .h5-put-verify {
    padding: 0 10px 41px 9px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(232, 232, 232, 1);
  }

  .h5-put-phone div:first-child {
    position: relative;
    font-size: 32px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    padding-right: 14px;
    margin-right: 34px;
  }

  .h5-put-phone div:first-child::after {
    content: '';
    position: absolute;
    top: 6px;
    right: 0;
    width: 2px;
    height: 30px;
    border-right: 2px solid rgba(205, 206, 210, 1);
  }

  .h5-put-phone div .blur,
  .h5-put-verify div .blur {
    font-size: 32px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 30px;
    background: none;
    border: none;
    outline: none;
  }

  .h5-put-phone div .active,
  .h5-put-verify div .active {
    color: rgba(68, 68, 68, 1);
    font-family: Source Han Sans CN;
    font-weight: 400;
    font-size: 32px;
    background: none;
    border: none;
    outline: none;
  }

  .h5-put-verify {
    margin-top: 64px;
    justify-content: space-between;
  }

  .h5-put-verify .h5-noForbidden {
    font-size: 32px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(0, 215, 137, 1);
    line-height: 30px;
  }

  .h5-put-verify .h5-isForbidden {
    font-size: 32px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 30px;
  }

  /* finish */
  .h5-finish {
    margin: 100px auto 0;
    width: 376px;
    height: 80px;
    background: linear-gradient(-37deg, rgba(42, 193, 124, 1), rgba(42, 193, 145, 1));
    opacity: 0.5;
    border-radius: 12px;
    font: 400 36px Source Han Sans CN;
    color: rgba(255, 255, 255, 1);
    line-height: 80px;
    text-align: center;
  }

  .h5-finish-active {
    box-shadow: 0px 10px 30px 0px rgba(51, 226, 148, 0.5);
    opacity: 1;
  }

  /* login-h5-remind */
  .login-h5-remind {
    width: 40%;
    height: 20%;
    position: fixed;
    font-size: 30px;
    text-align: center;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    color: #FFFFFF;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, .3);
  }
</style>
