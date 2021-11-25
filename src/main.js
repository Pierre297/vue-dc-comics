import Vue from "vue";
import App from "./App.vue";
import Header from "./App.vue";
import Main from "./App.vue";
import Comiccard from "./App.vue";
import Footer from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

new Vue({
  render: (h) => h(Header),
}).$mount("#app");

new Vue({
  render: (h) => h(Main),
}).$mount("#app");

new Vue({
  render: (h) => h(Comiccard),
}).$mount("#app");

new Vue({
  render: (h) => h(Footer),
}).$mount("#app");
