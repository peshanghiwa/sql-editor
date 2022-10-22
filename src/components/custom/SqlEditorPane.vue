<script setup>
import useEditorsConfig from "../../composables/editorsConfig";
const { editorFontSize, editorInput, tabs } = useEditorsConfig();
</script>

<template>
  <div class="sql-editor-container">
    <textarea
      :placeholder="
        tabs.length
          ? 'Enter SQL expresion here...'
          : 'You must have an active tab to write SQL'
      "
      v-model="editorInput"
      class="editor"
      :disabled="!tabs.length"
    ></textarea>
  </div>
</template>

<style scoped>
.sql-editor-container {
  height: 100%;
  overflow: hidden;
}

.editor {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: v-bind("editorFontSize");
  font-family: "Roboto Mono", monospace;
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 3px 5px;
}
</style>
