<script setup>
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";
import AppBody from "./components/layout/AppBody.vue";
import useThemeConfig from "./composables/themeConfig";
import useHotKeysConfig from "./composables/hotKeysConfig";

useThemeConfig();
useHotKeysConfig();
</script>

<template>
  <div class="project-container">
    <AppHeader />
    <AppBody />
    <AppFooter />
  </div>
</template>

<style scoped>
.project-container {
  width: 100%;
  height: 100vh;
}
</style>
