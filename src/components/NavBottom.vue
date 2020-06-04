<template>
  <div>
    <div class="nav">
      <div v-for="(item,index) of list" :key="index" :class="{'show-active': activeNum == index}"
      @click="toHomePage(index,item.pathName)"
      class="nav-detail">
        <div class="iconfont nav-icon" v-html="item.icon"></div>
        <div class="nav-text">{{item.title}} {{activeNum}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
        activeNum:0,
        list:[
          {
            title: '首页',
            icon: '&#xe602;',
            pathName:'/HomePage'
          },
          {
            title: '学习',
            icon: '&#xe616;',
            pathName:'/StudyPage'
          },
          {
            title: '我的',
            icon: '&#xe603;',
            pathName:'/MyPage'
          }
        ],
        
      }
    },
    
    methods: {
      toHomePage(index,pathName){
        this.activeNum = index
        this.$router.push(pathName)
      }
    }
}
</script>

<style>
  .nav {
    background-color: rgba(255,255,255,1);
    width:100%;
    height: 3.0625rem;
    border-top:.0625rem solid #FFEEEBEE;
    position: fixed;
    bottom:0;
    display:flex;
    justify-content: space-around;
    color:rgba(168,168,168,1);
    font-size:.6875rem;

  }
  
  .nav-detail {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .nav-icon {
    font-size:1.2rem;
    margin-top:.5625rem;
  }
  .nav-text {
    font-family:Source Han Sans CN;
    font-weight:400;
  }
  .show-active{
    color:rgba(64,213,134,1);
  }
</style>