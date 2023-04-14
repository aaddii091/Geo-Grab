import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vue3Geolocation from "vue3-geolocation";
const app = createApp(App);
app.use(Vue3Geolocation);
app.use(router).mount("#app");
