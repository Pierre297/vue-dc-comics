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
  render: (h) => h(Testata),
}).$mount("#app");

new Vue({
  render: (h) => h(Principale),
}).$mount("#app");

new Vue({
  render: (h) => h(Piepagina),
}).$mount("#app");
