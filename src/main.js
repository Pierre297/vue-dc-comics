import Vue from "vue";
import App from "./App.vue";
import Testata from "./App.vue";
import Principale from "./App.vue";
import Piepagina from "./App.vue";

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
