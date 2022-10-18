<script setup>
import useSqlEditorConfig from "../composables/sqlEditorConfig";
const { editorInput } = useSqlEditorConfig();
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
  font-size: 1.2rem;
  font-family: "Roboto Mono", monospace;
  background-color: #191919;
  color: #fff;
  padding: 3px 5px;
}
</style>
