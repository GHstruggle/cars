<template>
  <div>
    <!-- 地图 -->
    <Map />
    <!-- 汽车 -->
    <Cars />
    <!-- 会员 -->
    <div class="children-view" :class="{open: show}">
      <router-view />
    </div>
    <!-- nav -->
    <navBar />
  </div>
</template>

<script>
import Map from '../amap/index';
import Cars from '../cars/index';
import navBar from '@/components/navBar/index';
export default {
  name: "Index",
  components: { Map, Cars, navBar },
  computed: {
    show() {
      const router = this.$route;
      return router.name == 'Index' ? false : true;
    }
  }
};
</script>

<style lang="scss">
.children-view {
  position: fixed;
  top: 0;
  right: -380px;
  bottom: 0;
  width: 380px;
  background: $color-main;
  z-index: 99;
  @include webkit(transition, right 0.3s ease-in);
}
.open {
  right: 0;
}
</style>
