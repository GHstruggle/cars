import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 字体图标
import './font/iconfont.scss';

// 地图配置
import './plugin/vue-aMap';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
