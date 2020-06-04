<template>
  <div>
    
  </div>
</template>

<script>
  import LunBor from '@/components/Lunbo'
  export default {
    methods: {
      handleSwiperClick() {}
    },
    data() {
      return {
        swiperOption: {
          loop: true,
          showDots: false
        },
        bannerList: [{
            img: 'http://img4.imgtn.bdimg.com/it/u=3544645869,1290052097&fm=26&gp=0.jpg'
          },
          {
            img: 'http://img2.imgtn.bdimg.com/it/u=2569462725,2846192127&fm=26&gp=0.jpg'
          },
          {
            img: 'http://img5.imgtn.bdimg.com/it/u=3445416201,435356528&fm=11&gp=0.jpg'
          }
        ]
      }
    },
    components: {

    }
  }
</script>

<style>
  
</style>
