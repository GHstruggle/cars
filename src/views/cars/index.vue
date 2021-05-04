<template>
  <div class="cars-wrap">
    <div class="cars-wrap-swiper">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <CarsItem />
        </swiper-slide>
        <swiper-slide>
          <CarsItem />
        </swiper-slide>
        <swiper-slide>
          <CarsItem />
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
 import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import "swiper/dist/css/swiper.css";
import CarsItem from '@c/carsItem/index';
export default {
  name: "Cars",
  components: { Swiper, SwiperSlide, CarsItem },
  data() {
    return {
      screenWidth: document.documentElement.clientWidth,//屏幕宽度
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      },
    };
  }
};
</script>

<style lang="scss">
.cars-wrap {
  min-width: 930px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 94px;
  z-index: 100;
}
.cars-wrap-swiper {
  padding: 0 150px;
}
</style>
