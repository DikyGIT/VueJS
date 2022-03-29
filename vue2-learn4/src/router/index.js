import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/views/transaction/Index";
import Create from "@/views/transaction/Create";
import Edit from "@/views/transaction/Edit";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "transaction.index",
    component: Index,
  },
  {
    path: "/create",
    name: "transaction.create",
    component: Create,
  },
  {
    path: "/edit/:id",
    name: "transaction.edit",
    component: Edit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
