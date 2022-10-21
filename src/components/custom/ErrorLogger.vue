<script scoped></script>

<template>
  <div class="error-log-container">
    You have an error in your SQL syntax; check the manual that corresponds to
    your MySQL server version for the right syntax to use near 'SELECT count(*)
    FROM MyTable' at line 1
  </div>
</template>

<style scoped>
.error-log-container {
  padding: 10px;
  height: 100%;
  overflow-y: auto;
  color: var(--text-color);
  background-color: var(--grey-color);
  font-size: 14px;
}
</style>
