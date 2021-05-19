<template>
  <div class="navbar">
    <ul>
      <li><i class="iconfont index-icon icon-wenhao"></i></li>
      <li><i class="iconfont index-icon icon-sousuo"></i></li>
      <li><a href="javascript:void(0);" class="select-cars-btn">选择车辆</a></li>
      <li><i class="iconfont index-icon icon-dingwei"></i></li>
      <li>
        <router-link to="user">
          <i class="iconfont index-icon icon-user-s"></i>
        </router-link>
      </li>
    </ul>
  </div>  
</template>

<script>
export default {

}
</script>

<style lang="scss">
.navbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 86px;
  text-align: center;
  z-index: 99;
  li {
    display: inline-block;
    cursor: pointer;
  }
  .iconfont {
    margin: 0 17px;
  }
}
.select-cars-btn {
    display: block;
    margin: 0 17px;
    width: 240px;
    height: 80px;
    line-height: 84px;
    font-size: 26px;
    font-weight: 300;
    text-align: center;
    border-radius: 100px;
    color: #fff;
    background-color: $color-main;
  }
</style>
