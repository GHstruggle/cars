<template>
  <div class="cars-wrap" style="display: none">
    <div class="cars-wrap-swiper">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <CarsItem :cars_height="500" />
        </swiper-slide>
        <swiper-slide>
          <CarsItem />
        </swiper-slide>
        <swiper-slide>
          <CarsItem />
        </swiper-slide>
        <swiper-slide>
          <CarsItem />
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
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
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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
  .swiper-container {
    overflow: initial;
  }
}

.swiper-button-next, .swiper-container-rtl .swiper-button-prev,
.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
  width: 60px;
  height: 100px;
  background: #fff;
  line-height: 116px;
  border-radius: 60px;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.2);
}
.swiper-button-next, .swiper-container-rtl .swiper-button-prev {
   &::after {
    content: "";
    display: inline-block;
    width: 25px;
    height: 25px;
    margin-left: 10px;
    border-top: 3px solid #34393f;
    border-right: 3px solid #34393f;
    transform: rotate(45deg);
  }
}
.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
  &::after {
    content: "";
    display: inline-block;
    width: 25px;
    height: 25px;
    margin-left: 20px;
    border-top: 3px solid #34393f;
    border-left: 3px solid #34393f;
    transform: rotate(-45deg);
  }
}
</style>
