import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/PageKatalogHome";
import Makanan from "../views/PageKatalogMakanan";
import MakananLemper from "../views/PageMakananLemper";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/makanan",
    name: "Makanan",
    component: Makanan,
  },
  {
    path: "/makanan/pisang",
    name: "MakananLemper",
    component: MakananLemper,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
