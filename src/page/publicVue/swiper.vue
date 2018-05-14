<template>
    <swiper :options="swiperOption" class="swiperStyle">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" :style="slide.bgColor">
        <router-link :to="slide.src" :style="slide.bg"></router-link>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        autoplay:true,
        autoplay: {
          delay: 3000,
          disableOnInteraction:false,
        },
        loop: true,
        simulateTouch:false,
        
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
      swiperSlides: [
        { bg:"background:url('"+require('../../assets/images/1.jpg')+"') center no-repeat #e8e8e8",src:"/" },
        { bg:"background:url('"+require('../../assets/images/2.jpg')+"') center no-repeat #b92025",src:"/" },
        { bg:"background:url('"+require('../../assets/images/3.jpg')+"') center no-repeat #ffebd8",src:"/" },
        { bg:"background:url('"+require('../../assets/images/4.jpg')+"') center no-repeat #ffebd8",src:"/" }
      ]

    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

$wra-width:1200px;
.swiperStyle {
  height:350px;
  text-align:center;
  a {display:block;height:100%;}
  .swiper-button-prev {
    left:50%;
    margin-left:-640px;
  }
  .swiper-button-next {
    right:50%;
    margin-right:-640px;
  }
}

</style>
