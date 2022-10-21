<script setup>
import { ref } from "vue";
import AppHeader from "./components/AppHeader.vue";
import SqlEditor from "./components/SqlEditor.vue";
import useSplitpaneConfig from "./composables/splitpaneConfig";
import ErrorLogger from "./components/ErrorLogger.vue";
import ResultTable from "./components/ResultTable.vue";
import EditorTabs from "./components/EditorTabs.vue";
import SqlTables from "./components/SqlTables.vue";

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
  <main>
    <AppHeader />
    <section>
      <!-- Main page Split panes -->
      <splitpanes vertical>
        <!-- Sidebar Pane -->
        <pane v-if="isSidebarOpen" size="20" min-size="15" max-size="40">
          <splitpanes @resized="onSidebarPaneResized" horizontal="horizontal">
            <pane
              class="sidebar-pane"
              :size="sidebarPaneSizes[0]"
              min-size="2.5"
            >
              <button
                @click="onSidebarPaneButtonClick(0)"
                class="splitpane-sidebar-buttons"
              >
                Tabs
              </button>
              <EditorTabs />
            </pane>
            <pane
              class="sidebar-pane"
              :size="sidebarPaneSizes[1]"
              min-size="2.5"
            >
              <button
                @click="onSidebarPaneButtonClick(1)"
                class="splitpane-sidebar-buttons"
              >
                Tables
              </button>

              <SqlTables />
            </pane>
            <!-- <pane
              class="sidebar-pane"
              :size="sidebarPaneSizes[2]"
              min-size="2.5"
            >
              <button
                @click="onSidebarPaneButtonClick(2)"
                class="splitpane-sidebar-buttons"
              >
                Tables
              </button>
            </pane> -->
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
                  <SqlEditor />
                </pane>
                <pane min-size="15">
                  <ResultTable />
                </pane>
              </splitpanes>
            </pane>

            <!-- Error Logger Pane  -->
            <pane
              :size="logPaneSize"
              v-if="isLogPaneOpen"
              class="error-log-pane"
            >
              <ErrorLogger />
            </pane>
          </splitpanes>
        </pane>
      </splitpanes>
    </section>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100vh;
}

section {
  height: calc(100% - 50px);
  width: 100%;
}

.splitpane-sidebar-buttons {
  width: 100%;
  border: 2px solid #c84b31;
  background-color: #c84b31;
  cursor: pointer;
}

.sidebar-pane,
.error-log-pane {
  background-color: #232323;
}
</style>
