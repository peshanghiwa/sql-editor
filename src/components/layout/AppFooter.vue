<script setup></script>
<template>
  <div class="footer-container">
    Made with <span class="heart">❤</span> by
    <a class="author" href="https://github.com/peshanghiwa" target="_blank">
      <strong> Peshang </strong>
    </a>
  </div>
</template>
<style scoped>
.footer-container {
  width: 100%;
  background-color: var(--primary-color);
  padding-inline: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  font-size: 12px;
  align-items: center;
}
.heart {
  margin-inline: 8px;
  font-size: 17px;
  color: #c84b31;
}

.author {
  margin-inline-start: 8px;
  text-decoration: none;
}
</style>
