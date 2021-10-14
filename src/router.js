import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: () =>
        import(/* webpackChunkName: "index" */ "./views/index.vue"),
    },
    {
      path: "/recipes/:uid",
      name: "single-recipe",
      component: () =>
        import(/* webpackChunkName: "recipes--uid" */ "./views/_uid.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "FourOFour",
      component: () => import("./components/FourOFour.vue"),
    },
  ],
});

export default router;
