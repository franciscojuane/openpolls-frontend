import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "./plugins/axios";
import apexCharts from "./plugins/apexCharts";
import AuthService from "@/services/authService.js";
import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  axios,
  apexCharts,
  render: (h) => h(App),
}).$mount("#app");

Vue.prototype.$auth = AuthService;
