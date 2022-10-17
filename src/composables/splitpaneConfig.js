import { reactive, toRefs, computed } from "vue";

const data = reactive({
  isSidebarOpen: true,
  editorDirection: "horizontal",
});

const toggleSidebar = () => {
  data.isSidebarOpen = !data.isSidebarOpen;
};

const toggleEditorDirection = () => {
  data.editorDirection =
    data.editorDirection === "horizontal" ? "vertical" : "horizontal";
};

const isSidebarOpen = computed(() => data.isSidebarOpen);
const editorDirection = computed(() => data.editorDirection);

export default () => ({
  ...toRefs(data),
  toggleSidebar,
  isSidebarOpen,
  toggleEditorDirection,
  editorDirection,
});
