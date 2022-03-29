import Vue from "vue";
import App from "./App.vue";
import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
import { ValidationProvider } from "vee-validate";
import router from './router'

Vue.component("ValidationProvider", ValidationProvider);

// Add the required rule
extend("min", {
  validate(value, args) {
    return value.length >= args.length;
  },
  params: ["length"],
});

extend("required", {
  ...required,
  message: "This field is required",
});

// Add the email rule
extend("email", {
  ...email,
  message: "This field must be a valid email",
});
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
