<template>
  <div class="body">
    <!-- 遮挡层 -->
    <div class="cover">
    </div>
    <!-- 图片 -->
    <div class="image">
      <img draggable="false" src="../../static/group.png" alt="">
    </div>
    <!-- 登录按钮 -->
    <div class="register">
      <!-- 微信登录按钮 -->
      <div class="register-weixin">微信登录</div>
      <!-- 手机号登录按钮 -->
      <div class="register-cellphone" @click="goLogin">手机号登录</div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
      goLogin(){
        this.$router.push('./Login')
      }
    },
}
</script>

<style>
  
</style>