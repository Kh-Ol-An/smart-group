import Vue from "vue";
import VueRouter from "vue-router";
import People from "../views/People.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/people",
    name: "People",
    component: People
  },
  {
    path: "/films",
    name: "Films",
    component: () => import("../views/Films.vue")
  },
  {
    path: "/starships",
    name: "Starships",
    component: () => import("../views/Starships.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
