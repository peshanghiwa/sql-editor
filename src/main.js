// Imports
import { createApp } from "vue";
import App from "./App.vue";
import { Splitpanes, Pane } from "splitpanes";

// Styles
import "splitpanes/dist/splitpanes.css";
import "./style.css";

const app = createApp(App);

app.component("splitpanes", Splitpanes);
app.component("pane", Pane);

app.mount("#app");
