<template>
  <div class="amap-wrapper">
    <el-amap class="amap-box" vid="amapContainer" :events="events"></el-amap>
  </div>
</template>

<script>
import { lazyAMapApiLoaderInstance } from 'vue-amap';
export default {
  name: "Map",
  data() {
    return {
      map: null,
      zoom: 17,
      events: {}
    }
  },
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      // your code ...
      this.map = new AMap.Map('amapContainer', {
        center: [114.433636, 30.448696],
        zoom: this.zoom,
      });
    });
  }
};
</script>

<style lang="scss">
.amap-wrapper {
  height: 100vh;
}
</style>
