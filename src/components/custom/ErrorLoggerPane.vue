<script setup>
import useEditorsConfig from "../../composables/editorsConfig";

const { errorLog } = useEditorsConfig();
</script>

<template>
  <div v-if="errorLog" class="error-log-container">
    {{ errorLog }}
  </div>

  <div v-else class="error-log-container empty-error">
    Errors pane, all the sql errors are going to appear here. <br />
    To trigger an SQL error try executing this statement
    <strong> "Select. * from users" </strong>
  </div>
</template>

<style scoped>
.error-log-container {
  padding: 10px;
  height: 100%;
  overflow-y: auto;
  color: var(--text-color);
  background-color: var(--background-color-2);
  font-size: 14px;
}

.empty-error {
  opacity: 0.7;
}
</style>
