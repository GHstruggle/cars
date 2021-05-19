<template>
  <div class="cars-item-wrap ps-relative">
    <section class="cars-item">
      <header>
        <h4 class="cars-logo">
          <img src="../../assets/image/车标.png" alt>
          <span class="cars-name">Mustang 2019款</span>
        </h4>
        <p class="cars-dec">新能源汽车5座</p>
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
    <section class="cars-item-2" :style="{'height': cars_height + 'px'}">
      <header class="title">
        <h4>某某停车场</h4>
        <i class="iconfont icon-x"></i>
      </header>
      <div class="line"></div>
      <div class="logo-dec">
        <h4 class="cars-logo">
          <img src="../../assets/image/车标.png" alt>
          <span class="cars-name">Mustang 2019款</span>
        </h4>
        <p class="cars-dec">新能源汽车5座</p>
      </div>
      <div class="cars-item-2-img">
        <img src="../../assets/image/车.png" alt="">
      </div>
      <div class="cars-item-2-dec">
        <h4 class="cars-number">粤 B7787N</h4>
        <div class="cars-km">约<strong>600</strong>KM</div>
      </div>
      <!-- 电量条 -->
      <div class="Electricity-strip">
        <div class="Electricity-total">
          <div class="Electricity-last" :style="{width: Electricity_width + '%'}"></div>
        </div>
      </div>
      <!-- 费用提示 -->
      <div class="tip">
        取车约支付12.0元停车费，实际补贴12.0元
      </div>
      <footer>
        <ul class="select">
          <li>
            <span>日租车</span>
            <span>￥300/1天</span>
          </li>
          <li>
            <span>日租车</span>
            <span>￥300/1天</span>
          </li>
          <li class="active">
            <span>日租车</span>
            <span>￥300/1天</span>
          </li>
          <li>
            <span>日租车</span>
            <span>￥300/1天</span>
          </li>
        </ul>
        <div class="terms">
          <span>参保《全面保障服务》用车更放心</span>
          <img src="../../assets/image/条款2.png" alt="">
        </div>
      </footer>
    </section>
    <div class="reservation-btn">
        预约用车
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarsItem',
  props: {
    cars_height: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      Electricity_width: 80,
    }
  }
}
</script>

<style lang="scss" scoped>
.tip {
  font-size: 14px;
  color: #929496;
  text-align: center;
}
.select {
  margin-top: 26px;
  li {
    display: flex;
    height: 46px;
    padding: 0 20px;
    margin-bottom: 15px;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    background-color: #f3f3f3;
    &.active {
      border: 2px solid #0f9cee;
    }
  }
}
// 条款
.terms {
  padding: 0 4px;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cars-item-wrap .cars-item-2 {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.reservation-btn {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  height: 60px;
  width: 200px;
  line-height: 60px;
  font-size: 26px;
  color: #fff;
  border-radius: 35px;
  cursor: pointer;
  text-align: center;
  background-color: #3a3f45;
}

.cars-item-2 {
  overflow-y: auto;
  padding: 0 20px;
  background-color: #fff;
  border-radius: 24px;
  @include webkit(box-shadow, 0 0 18px 0 rgba(0, 0, 0, 0.2));
  @include webkit(box-sizing, border-box);
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  .title {
    display: flex;
    line-height: 60px;
    align-items: center;
    justify-content: space-between;
    h4 {
      color: #929496;
      font-size: 18px;
    }
  }
  .cars-item-2-img {
    margin-top: 20px;
    img {
      width: 100%;
    }
  }
  .logo-dec {
    margin-top: 20px;
    display: flex;
    h4 {
      flex: 1;
    }
  }
  .cars-item-2-dec {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

// 电量条
.Electricity-strip {
  margin: 18px 0 32px;
  height: 36px;
  padding: 0 10px;
  border-radius: 17px;
  line-height: 36px;
  @include webkit(box-shadow, 0 0 10px 0 rgba(0, 0, 0, 0.2));
  .Electricity-total {
    display: inline-block;
    height: 8px;
    width: 100%;
    border-radius: 4px;
    background-color: #e1e1e1;
    .Electricity-last {
      height: 8px;
      border-radius: 4px;
      background-color: #0f9cee;
    }
  }
}

i[class^=iconfont] {
  font-size: 22px;
  cursor: pointer;
  color: #929496;
}

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
}

.cars-number {
  color: $color-main;
  font-size: 18px;
}

.cars-km {
  float: left;
  line-height: 27px;
  font-size: 12px;
  color: $color-main;
  strong {
    color: $color-main;
    font-size: 16px;
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
