import Vue from "vue";
import VueQrcodeReader from "vue-qrcode-reader";
import VueRouter from "vue-router";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(VueRouter);

Vue.use(VueQrcodeReader);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
