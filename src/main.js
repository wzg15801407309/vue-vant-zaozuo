import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// UI组件引入 
import './plugins/vant';
import "@/assets/iconfont/iconfont.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
