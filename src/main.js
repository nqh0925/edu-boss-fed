import Vue from "vue";
import Antd from 'ant-design-vue';  // 引入 ant-design-vue
import 'ant-design-vue/dist/antd.css'; // 引入ant-design-vue 样式
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(Antd); //使用 ant-design-vue

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
