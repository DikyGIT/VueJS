import Vue from "vue";
import App from "./App.vue";
import { v4 as uuidv4 } from "uuid";
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
