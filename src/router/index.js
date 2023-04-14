import { RouterView, createRouter, createWebHistory } from "vue-router";

import RegistrationView from "../views/RegistrationView.vue";
import LoginPage from "../views/LoginPage.vue";
import HomeView from "../views/HomeView.vue";
import ChatRoom from "../views/ChatRoom.vue";
import { auth } from "@/firebase/config";

const routes = [
  {
    path: "/",
    name: "register",
    component: RegistrationView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/chatroom",
    name: "chatroom",
    component: ChatRoom,
    meta: {
      requireAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((rec) => rec.meta.requireAuth)) {
    let user = auth.currentUser;
    if (user) {
      next();
    } else {
      next({ name: "login" });
    }
  } else {
    next();
  }
});

export default router;
