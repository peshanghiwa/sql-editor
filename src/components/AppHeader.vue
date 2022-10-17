<script setup></script>

<template>
  <header>
    <button class="btn btn-primary burger-button">
      <img src="./../assets/menu.svg" height="20" width="20" alt="" />
    </button>

    <button class="btn btn-secondary action-button">
      <img src="./../assets/run.svg" height="12" width="12" alt="" />
      <span class="button-text"> Run </span>
    </button>

    <button class="btn btn-secondary action-button">
      <img src="./../assets/stop.svg" height="12" width="12" alt="" />
      <span class="button-text"> Kill </span>
    </button>

    <button class="btn btn-secondary action-button">
      <img src="./../assets/save.svg" height="14" width="14" alt="" />
      <span class="button-text"> Save </span>
    </button>

    <div class="spacer"></div>

    <button class="btn btn-secondary action-button">
      <img src="./../assets/horizontal.svg" height="20" width="20" alt="" />
    </button>
    <button class="btn btn-primary">Login</button>
  </header>
</template>

<style scoped>
header {
  height: 50px;
  width: 100%;
  background-color: #2d4263;
  display: flex;
  align-items: center;
  padding-inline: 15px;
}
.burger-button {
  margin-inline-end: 20px;
}
.button-text {
  margin-left: 5px;
}

.action-button {
  margin-inline: 5px;
}
</style>
