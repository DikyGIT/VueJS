import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/PageLogin";
import Register from "@/views/PageRegister";
import FetchDataQuran from "@/views/PageDataQuran";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/fetchdataquran",
    name: "FetchDataQuran",
    component: FetchDataQuran,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
