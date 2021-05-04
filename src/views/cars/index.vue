<template>
  <div class="cars-wrap">
    <section class="cars-item">
      <header>
        <h4 class="cars-logo">
          <img src="../../assets/image/车标.png" alt="">
          <span class="cars-name">Mustang 2019款</span>
        </h4>
        <p class="cars-dec">新能源汽车  5座</p>
      </header>
      <div class="cars-content"></div>
      <footer></footer>
    </section>
  </div>
</template>

<script>
export default {
  name: "Cars",
};
</script>

<style lang="scss">
  .cars-wrap {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 94px;
    z-index: 100;
  }
  .cars-item {
    width: 450px;
    height: 256px;
    margin: auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 24px;
    @include webkit(box-shadow, 0 0 18px 0 rgba(0, 0, 0, .2));
    @include webkit(box-sizing, border-box);
    header {
      display: flex;
      h4{ flex: 1; }
    }
  }
  .cars-logo {
    img {
      margin-right: 10px;
      display: inline-block;
      height: 34px;
      vertical-align: middle;
    }
    span {
      color: $color-text;
      font-size: 16px;
    }
  }
  .cars-dec {
    line-height: 34px;
    font-size: 14px;
    color: $color-tips;
  }
</style>
