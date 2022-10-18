import { reactive, toRefs, computed } from "vue";

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

const isSidebarOpen = computed(() => data.isSidebarOpen);
const editorDirection = computed(() => data.editorDirection);
const isLogPaneOpen = computed(() => data.isLogPaneOpen);

export default () => ({
  ...toRefs(data),
  toggleSidebar,
  isSidebarOpen,
  toggleEditorDirection,
  editorDirection,
  toggleLogPane,
  isLogPaneOpen,
});