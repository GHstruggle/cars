<template>
  <section class="cars-item">
    <header>
      <h4 class="cars-logo">
        <img src="../../assets/image/车标.png" alt>
        <span class="cars-name">Mustang 2019款</span>
      </h4>
      <p class="cars-dec">新能源汽车 5座</p>
    </header>
    <div class="cars-content clearfix">
      <div class="info">
        <div>
          <h4 class="cars-number">粤 B7787N</h4>
          <div class="cars-electricity clearfix">
            <ul class="active-li-3">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div class="cars-km">约<strong>600</strong>KM</div>
          </div>
        </div>
      </div>
      <img src="../../assets/image/车.png" alt>
    </div>
    <div class="line"></div>
    <footer>
      <span>某某停车场</span>
      <span>></span>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'CarsItem',
}
</script>

<style lang="scss" scoped>
.cars-item {
  // width: 450px;
  // height: 256px;
  margin: auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 24px;
  @include webkit(box-shadow, 0 0 18px 0 rgba(0, 0, 0, 0.2));
  @include webkit(box-sizing, border-box);
  header {
    display: flex;
    h4 {
      flex: 1;
    }
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
.cars-content {
  position: relative;
  margin: 11px 0 40px;
  img {
    float: right;
    height: 50px;
  }
  .info {
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    align-items: center;
  }
  .cars-number {
    font-size: 18px;
  }
  .cars-electricity {
    margin-top: 10px;
    ul {
      float: left;
      @for $i from 1 to 10 {
        &.active-li-#{$i} {
          li:nth-child(-n + #{$i}) {
            background: linear-gradient(to top, #11a4f7, #0b8bd9);
          }
        }
      }
    }
    li {
      display: inline-block;
      width: 7px;
      height: 24px;
      margin-right: 3px;
      border-radius: 100px;
      background-color: #e1e1e1;
    }
  }
  .cars-km {
    float: left;
    line-height: 27px;
    font-size: 12px;
    strong {
      color: $color-main;
      font-size: 16px;
    }
  }
}
.cars-item footer {
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  color: #6e7174;
}
@media screen and (max-width: 1125px) {
  .cars-content {
    img {
      float: none;
      width: 100%;
      height: 100%;
    }
    .info {
      position: static;
    }
  }
}
</style>
