<script setup>
import { ref } from "vue";
import AppHeader from "./components/AppHeader.vue";
import useSplitpaneConfig from "./composables/splitpaneConfig";

const { isSidebarOpen, editorDirection, isLogPaneOpen } = useSplitpaneConfig();

const sidebarPaneSizes = ref([94, 1.5, 1.5]);
const onSidebarPaneButtonClick = (paneNumber) => {
  sidebarPaneSizes.value.forEach((size, index) => {
    if (index === paneNumber) {
      sidebarPaneSizes.value[index] = 94;
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

const logPaneSize = ref(30);
</script>

<template>
  <main>
    <AppHeader />
    <section>
      <splitpanes vertical>
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
                Saved Queries
              </button>
            </pane>
            <pane
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
            </pane>
          </splitpanes>
        </pane>
        <pane>
          <splitpanes
            horizontal
            @resized="
              (event) => {
                event[1] ? (logPaneSize = event[1].size) : null;
              }
            "
          >
            <pane min-size="15">
              <splitpanes :horizontal="editorDirection === 'horizontal'">
                <pane min-size="15">
                  <span>4</span>
                </pane>
                <pane min-size="15">
                  <span>5</span>
                </pane>
              </splitpanes>
            </pane>
            <pane :size="logPaneSize" v-if="isLogPaneOpen">
              <span>6</span>
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

.sidebar-pane {
  background-color: #232323;
}
</style>
