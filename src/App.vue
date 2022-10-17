<script setup>
import AppHeader from "./components/AppHeader.vue";
</script>

<template>
  <main>
    <AppHeader />
    <section class="editor-body">
      <splitpanes vertical>
        <pane size="20" min-size="15" max-size="40">
          <span>1</span>
        </pane>
        <pane>
          <span>3</span>
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

section.editor-body {
  height: calc(100% - 50px);
  width: 100%;
}
</style>
