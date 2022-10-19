// Imports
import { createApp } from "vue";
import App from "./App.vue";
import { Splitpanes, Pane } from "splitpanes";
import { VueFinalModal } from "vue-final-modal";

// Styles
import "splitpanes/dist/splitpanes.css";
import "./style.css";

const app = createApp(App);

app.component("splitpanes", Splitpanes);
app.component("pane", Pane);
app.component("vue-final-modal", VueFinalModal);

app.mount("#app");
