import { reactive, toRefs } from "vue";

const data = reactive({
  isSidebarOpen: true,
  editorDirection: "horizontal",
  isLogPaneOpen: false,
});

const toggleSidebar = () => {
  data.isSidebarOpen = !data.isSidebarOpen;
};

const toggleEditorDirection = () => {
  data.editorDirection =
    data.editorDirection === "horizontal" ? "vertical" : "horizontal";
};

const toggleLogPane = () => {
  data.isLogPaneOpen = !data.isLogPaneOpen;
};

export default () => ({
  ...toRefs(data),
  toggleSidebar,
  toggleEditorDirection,
  toggleLogPane,
});
