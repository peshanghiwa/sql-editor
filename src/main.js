// Imports
import { createApp } from "vue";
import App from "./App.vue";
import { Splitpanes, Pane } from "splitpanes";
import { VueFinalModal } from "vue-final-modal";
import Treeview from "vue3-treeview";

// Styles
import "./assets/styles/global.css";
import "./assets/styles/split-pane.css";
import "./assets/styles/bootstrap-icons.css";
import "splitpanes/dist/splitpanes.css";
import "vue3-treeview/dist/style.css";

const app = createApp(App);

app.component("splitpanes", Splitpanes);
app.component("pane", Pane);
app.component("vue-final-modal", VueFinalModal);
app.component("tree-view", Treeview);

app.mount("#app");
