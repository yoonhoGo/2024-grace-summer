import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import Button from "primevue/button";
import router from "./router";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.component("Button", Button);

app.mount("#app");
