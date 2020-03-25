import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/people"
  },
  {
    path: "/people",
    name: "people",
    component: () => import("../views/People.vue")
  },
  {
    path: "/films",
    name: "films",
    component: () => import("../views/Films.vue")
  },
  {
    path: "/starships",
    name: "starships",
    component: () => import("../views/Starships.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
