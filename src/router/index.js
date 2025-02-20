import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/shop",
    name: "ShopView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ShopView.vue"),
  },
  {
    path: "/:patchMatch(.*)*",
    name: "404View",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/404View.vue"),
  },
  {
    path: "/cart",
    name: "CartView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CartView.vue"),
  },
  {
    path: "/checkout",
    name: "CheckOutView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CheckoutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
