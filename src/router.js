import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "index", component: () => import("./views/index.vue") },
    {
      path: "/recipes/:uid",
      name: "single-recipe",
      component: () => import("./views/_uid.vue"),
    },
  ],
});

export default router;
