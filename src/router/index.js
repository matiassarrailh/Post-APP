import Vue from "vue";
import VueRouter from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import PostView from "@/views/PostView.vue";
import HomeView from "@/views/HomeView.vue";
import RegisterView from "@/views/RegisterView.vue";
import RegisterView2 from "@/views/RegisterView2.vue";
import GoodByeView from "@/views/GoodByeView.vue";
import UsersListView from "@/views/UsersListView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/users",
    name: "users-list",
    component: UsersListView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/register2",
    name: "register2",
    component: RegisterView2,
  },
  {
    path: "/goodbye",
    name: "goodbye",
    component: GoodByeView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/allposts",
    name: "allposts",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AllPostsView.vue"),
  },
  {
    path: "/post/:id",
    name: "post",
    component: PostView,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
