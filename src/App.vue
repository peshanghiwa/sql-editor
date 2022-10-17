<script setup>
import AppHeader from "./components/AppHeader.vue";
import useSplitpaneConfig from "./composables/splitpaneConfig";

const { isSidebarOpen, editorDirection } = useSplitpaneConfig();
</script>

<template>
  <main>
    <AppHeader />
    <section>
      <splitpanes vertical>
        <pane v-if="isSidebarOpen" size="20" min-size="15" max-size="40">
          <span>1</span>
        </pane>
        <pane>
          <splitpanes :horizontal="editorDirection === 'horizontal'">
            <pane min-size="10">
              <span>2</span>
            </pane>
            <pane min-size="10">
              <span>3</span>
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
</style>
