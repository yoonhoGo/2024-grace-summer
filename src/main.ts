import { createApp } from "vue";

import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router";
import { createPinia } from "pinia";
import Aura from "@primevue/themes/aura";
import "./index.css";
import "./style.css";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Image from "primevue/image";

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
app.component("InputText", InputText);
app.component("Image", Image);

app.mount("#app");
