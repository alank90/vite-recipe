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
      path: "/recipe/:uid",
      name: "single-recipe",
      component: () =>
        import(/* webpackChunkName: "recipes--uid" */ "./views/_uid.vue"),
    },
  ],
});

export default router;
