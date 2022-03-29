import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/PageHome.vue";
import Register from "../views/PageRegister.vue";
import FetchDataApiDoa from "../views/PageFetchDataApiDoa.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/api",
    name: "FetchDataApiDoa",
    component: FetchDataApiDoa,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
