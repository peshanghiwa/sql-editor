<script setup>
import useEditorsConfig from "../../composables/editorsConfig";
const { editorFontSize, editorInput } = useEditorsConfig();
</script>

<template>
  <div class="sql-editor-container">
    <textarea
      placeholder="Enter SQL expresion here..."
      v-model="editorInput"
      class="editor"
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
