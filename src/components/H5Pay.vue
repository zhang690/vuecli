<template>
  <div>
    <!-- nav -->
    <div class="nav">
      <div class="iconfont icon">&#xe614;</div>
      <div>确认订单</div>
    </div>
    <!-- price -->
    <div class="price">
      <div class="price-img">
      </div>

      <div class="price-disc">
        <div class="price-title">
          孩子渴望父母说的这 些话你说过了吗？
        </div>
        <div class="price-content">
          <div class="price-content-author">佟丽娅</div>
          <div class="price-content-money">¥199.90</div>
        </div>
      </div>
    </div>
    <!-- splitter-plate -->
    <div class="splitter-plate"></div>
    <!-- payment -->
    <div class="payment">
      <div class="payment-text">支付方式</div>
      <div class="payment-way">
        <div class="payment-way-weixin" @click="chooseWeixin">
          <label for="weixin">微信支付</label>
          <span v-show="isWeixin"></span>
        </div>
        <div class="payment-way-alipay" @click="chooseAlipay">
          <label for="alipay">微信支付</label>
          <span v-show="!isWeixin"></span>
        </div>
      </div>
    </div>
    <!-- pay-desc -->
    <div class="pay-desc">
      <div>您将购买的课程为线上课程内容服务，基于在线内容的特殊性及产品的整体性，购买使用全部或部分内容后不支持退款、转让，望您知悉并理解。
      </div>
      <div>购买后可在APP —“学习”中查看和使用。</div>
    </div>



    <!-- immediate-payment -->
    <div class="immediate-payment">
      <div class="immediate-payment-sum">
        <span>实付</span>
        <span>¥199.00</span>
      </div>
      <div class="immediate-payment-now" @click="goH5Login">立即购买</div>
    </div>

    <div @click="changeV" :class="isZhedang?'show-zd':'hide-zd'" v-if="isShowZhedang"></div>

    <H5Login v-if="isH5" :isShow="isShow" @myEven="changeValue"></H5Login>

  </div>
</template>

<script>
  import H5Login from './H5Login.vue'
  export default {
    data() {
      return {
        isWeixin: true,
        isH5: false,
        isShow:false,
        isShowZhedang:false,
        isZhedang:false,
        timer:null
      }
    },
    components: {
      H5Login
    },
    methods: {
      chooseWeixin() {
        this.isWeixin = true
      },
      chooseAlipay() {
        this.isWeixin = false
      },
      goH5Login() {
        this.isH5 = true
        this.isShow = true
        this.isShowZhedang = true
        this.isZhedang = true
      },
      changeValue(e){
        this.isZhedang = e.boo
        this.isShow = e.boo
        this.timer = setTimeout(()=>{
          if(this.timer){
            clearTimeout(this.timer)
          }
          this.isShowZhedang = e.boo
        },300)
      },
      changeV(){
        this.isZhedang = false
        this.isShow = false
        this.timer = setTimeout(()=>{
          if(this.timer){
            clearTimeout(this.timer)
          }
          this.isShowZhedang = false
        },300)
      }
    }
  }
</script>

<style>
  .nav {
    position: relative;
    height: 88px;
    margin-top: 40px;
  }

  .nav .icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 85px;
    height: 100%;
    text-align: center;
    line-height: 88px;
    font-size: 42px;
    font-weight: 700;
  }

  .nav div:last-child {
    width: 100%;
    font-size: 36px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(49, 35, 32, 1);
    line-height: 88px;
    text-align: center;
  }

  /* price */
  .price {
    height: 184px;
    display: flex;
    margin: 50px 35px 50px 32px;
    padding-bottom: 54px;
  }

  .price-img {
    width: 328px;
    height: 184px;
    background-color: pink;
    margin-right: 32px;
    flex-shrink: 0;
  }

  .price-disc {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .price-title {
    letter-spacing: 2px;
    font-size: 32px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(0, 0, 0, 1);
  }

  .price-content {
    display: flex;
    justify-content: space-between;
  }

  .price-content-author {
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: rgba(157, 157, 157, 1);
    line-height: 28px;
  }

  .price-content-money {
    font-size: 32px;
    line-height: 28px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(239, 92, 65, 1);
  }

  /* splitter-plate */
  .splitter-plate {
    width: 100%;
    height: 20px;
    background-color: #F0EFF2;
  }

  /* payment */
  .payment {
    margin: 60px 34px 32px 32px;
    padding-bottom: 46px;
    border-bottom: 2px solid rgba(245, 245, 245, 1);
  }

  .payment-text {
    font-size: 32px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 32px;
    margin-bottom: 54px;
  }

  .payment-way {
    width: 100%;
  }

  .payment-way-weixin,
  .payment-way-alipay {
    position: relative;
    display: flex;
    height: 64px;
    line-height: 64px;
    padding-left: 84px;
    display: flex;
    align-items: center;
    font-size: 28px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #3F3D3E;
  }

  .payment span:nth-of-type(n) {
    position: absolute;
    right: 0;
    width: 34px;
    height: 24px;
    background: url(../../static/已完成@2x.png) no-repeat;
    background-size: 34px 24px;
  }

  .payment-way-weixin {
    margin-bottom: 94px;
  }

  .payment-way-weixin::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 68px;
    height: 64px;
    background: url(../../static/微信支付@2x.png) no-repeat;
    background-size: 68px 64px;
  }

  .payment-way-alipay::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 68px;
    height: 68px;
    background: url(../../static/支付宝@2x.png) no-repeat;
    background-size: 68px 68px;
  }

  .pay-desc {
    margin: 0 50px;
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 34px;
  }

  .pay-desc div:nth-of-type(n) {
    position: relative;
    padding-bottom: 30px;
  }

  .pay-desc div:nth-of-type(n)::before {
    position: absolute;
    top: 15px;
    left: -18px;
    content: '';
    display: block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgba(153, 153, 153, 1);
  }

  .immediate-payment {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 100px;
    padding: 0 32px 0 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }

  .immediate-payment-sum:first-child {
    font-size: 28px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }

  .immediate-payment-sum span:last-child {
    font-size: 40px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #EF5C41;
  }

  .immediate-payment-now {
    letter-spacing: 2px;
    font-size: 30px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    width: 240px;
    height: 80px;
    background: linear-gradient(-37deg, rgba(42, 193, 124, 1), rgba(42, 193, 145, 1));
    box-shadow: 0px 10px 30px 0px rgba(51, 226, 148, 0.5);
    border-radius: 40px;
    text-align: center;
    line-height: 80px;
  }

  /* zhedangceng */
  .show-zd {
    position: fixed;
    background-color: #000000;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    animation: showzd .3s linear forwards;
  }
  .hide-zd {
    position: fixed;
    background-color: #000000;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    animation: hidezd .3s linear forwards;
  }
  @keyframes showzd {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.6;
    }
  }
  @keyframes hidezd {
    0% {
      opacity: 0.6;
    }
    100% {
      opacity: 0;
    }
  }
</style>
