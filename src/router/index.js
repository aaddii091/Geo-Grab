import { createRouter, createWebHistory } from "vue-router";
import RegistrationView from "../views/RegistrationView.vue";
import LoginPage from "../views/LoginPage.vue";
import HomeView from "../views/HomeView.vue";
import ChatRoom from "../views/ChatRoom.vue";
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
  },
  {
    path: "/chatroom",
    name: "chatroom",
    component: ChatRoom,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
