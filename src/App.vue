<template>
  <div id="app">
    <router-view/>
    <NavBottom v-if="navShow"></NavBottom>
  </div>
</template>

<script>
import NavBottom from '@/components/NavBottom'
export default {
  data(){
    return{
      navShow:false
    }
  },
  name: 'App',
  components:{NavBottom},
  watch:{
    $route(to){
      if( to.name === 'HomePage' || to.name === 'StudyPage' || to.name === 'MyPage' ) {
        this.navShow = true
      }else{
        this.navShow = false
      }
    }
  }
}
</script>

<style>
* {
    padding:0;
    margin:0;
  }
  @font-face {
  font-family: 'iconfont';  /* project id 1687564 */
  src: url('//at.alicdn.com/t/font_1687564_hbglz5hfnrp.eot');
  src: url('//at.alicdn.com/t/font_1687564_hbglz5hfnrp.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1687564_hbglz5hfnrp.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1687564_hbglz5hfnrp.woff') format('woff'),
  url('//at.alicdn.com/t/font_1687564_hbglz5hfnrp.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1687564_hbglz5hfnrp.svg#iconfont') format('svg');
}
  .iconfont{
	    font-family:"iconfont" !important;
	    font-size:1rem;font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-stroke-width: .0125rem;
	    -moz-osx-font-smoothing: grayscale;}
</style>
