import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/home";
import Login from "../views/login";

import Category from "../views/javaScriptShow/category";
import Reduce from "../views/javaScriptShow/reduce";

import Animation from "../views/cssShow/animation";
import Layout from "../views/cssShow/layout";
import Border from "../views/cssShow/border";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Category",
    name: "Category",
    component: Category,
  },
  {
    path: "/Reduce",
    name: "Reduce",
    component: Reduce,
  },
  {
    path: "/Animation",
    name: "Animation",
    component: Animation,
  },
  {
    path: "/Border",
    name: "Border",
    component: Border,
  },
  {
    path: "/Layout",
    name: "Layout",
    component: Layout,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
