<script setup>
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";
import AppBody from "./components/layout/AppBody.vue";

// import { ref } from "vue";
// import SqlEditor from "./components/SqlEditor.vue";
// import useSplitpaneConfig from "./composables/splitpaneConfig";
// import ErrorLogger from "./components/ErrorLogger.vue";
// import ResultTable from "./components/ResultTable.vue";
// import EditorTabs from "./components/EditorTabs.vue";
// import SqlTables from "./components/SqlTables.vue";

// const { isSidebarOpen, editorDirection, isLogPaneOpen } = useSplitpaneConfig();

// const sidebarPaneSizes = ref([60, 40]);
// const onSidebarPaneButtonClick = (paneNumber) => {
//   sidebarPaneSizes.value.forEach((size, index) => {
//     if (index === paneNumber) {
//       sidebarPaneSizes.value[index] = 98;
//     } else {
//       sidebarPaneSizes.value[index] = 2.5;
//     }
//   });
// };
// const onSidebarPaneResized = (event) => {
//   sidebarPaneSizes.value.forEach((size, index) => {
//     sidebarPaneSizes.value[index] = event[index].size;
//   });
// };

// const logPaneSize = ref(20);
</script>

<template>
  <div class="project-container">
    <AppHeader />
    <AppBody />
    <AppFooter />
  </div>
</template>

<style scoped>
.project-container {
  width: 100%;
  height: 100vh;
}
</style>
