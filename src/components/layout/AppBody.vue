<script setup>
import { ref } from "vue";
import SqlEditorPane from "../custom/SqlEditorPane.vue";
import useSplitpaneConfig from "../../composables/splitpaneConfig";
import ErrorLoggerPane from "../custom/ErrorLoggerPane.vue";
import ResultTablePane from "../custom/ResultTablePane.vue";
import EditorTabsPane from "../custom/EditorTabsPane.vue";
import SqlTablesPane from "../custom/SqlTablesPane.vue";

const { isSidebarOpen, editorDirection, isLogPaneOpen } = useSplitpaneConfig();

const sidebarPaneSizes = ref([60, 40]);
const onSidebarPaneButtonClick = (paneNumber) => {
  sidebarPaneSizes.value.forEach((size, index) => {
    if (index === paneNumber) {
      sidebarPaneSizes.value[index] = 98;
    } else {
      sidebarPaneSizes.value[index] = 2.5;
    }
  });
};
const onSidebarPaneResized = (event) => {
  sidebarPaneSizes.value.forEach((size, index) => {
    sidebarPaneSizes.value[index] = event[index].size;
  });
};

const logPaneSize = ref(20);
</script>

<template>
  <section>
    <!-- Main page Split panes -->
    <splitpanes vertical>
      <!-- Sidebar Pane -->
      <pane v-if="isSidebarOpen" size="20" min-size="15" max-size="40">
        <splitpanes @resized="onSidebarPaneResized" horizontal="horizontal">
          <pane class="sidebar-pane" :size="sidebarPaneSizes[0]" min-size="2.5">
            <button
              @click="onSidebarPaneButtonClick(0)"
              class="splitpane-sidebar-buttons"
            >
              Tabs
            </button>
            <EditorTabsPane />
          </pane>
          <pane class="sidebar-pane" :size="sidebarPaneSizes[1]" min-size="2.5">
            <button
              @click="onSidebarPaneButtonClick(1)"
              class="splitpane-sidebar-buttons"
            >
              Tables
            </button>
            <SqlTablesPane />
          </pane>
        </splitpanes>
      </pane>

      <!-- Page Content Pane -->
      <pane>
        <splitpanes
          horizontal
          @resized="
            (event) => {
              event[1] ? (logPaneSize = event[1].size) : null;
            }
          "
        >
          <!-- SQL Editor and SQL Result Pane  -->
          <pane min-size="15">
            <splitpanes :horizontal="editorDirection === 'horizontal'">
              <pane min-size="15">
                <SqlEditorPane />
              </pane>
              <pane min-size="15">
                <ResultTablePane />
              </pane>
            </splitpanes>
          </pane>

          <!-- Error Logger Pane  -->
          <pane :size="logPaneSize" v-if="isLogPaneOpen" class="error-log-pane">
            <ErrorLoggerPane />
          </pane>
        </splitpanes>
      </pane>
    </splitpanes>
  </section>
</template>

<style scoped>
section {
  height: calc(100% - 80px); /* 90px is height of footer and header */
  width: 100%;
}

.splitpane-sidebar-buttons {
  width: 100%;
  border: 2px solid var(--primary-color);
  background-color: var(--primary-color);
  cursor: pointer;
}

.sidebar-pane,
.error-log-pane {
  background-color: #232323;
}
</style>
