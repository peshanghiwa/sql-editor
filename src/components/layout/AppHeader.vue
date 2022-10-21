<script setup>
import useSplitpaneConfig from "../../composables/splitpaneConfig";
import useSqlEditorConfig from "../../composables/sqlEditorConfig";
const { toggleSidebar, toggleEditorDirection, editorDirection, toggleLogPane } =
  useSplitpaneConfig();

const { beautifyEditorInput, changeEditorFontSize, disabledTypeButtons } =
  useSqlEditorConfig();
</script>

<template>
  <header>
    <button @click="toggleSidebar" class="btn btn-primary burger-button">
      <img src="./../../assets/menu.svg" height="20" width="20" alt="" />
    </button>

    <button class="btn btn-secondary action-button">
      <img src="./../../assets/run.svg" height="12" width="12" alt="" />
      <span class="button-text"> Run </span>
    </button>

    <button class="btn btn-secondary action-button">
      <img src="./../../assets/stop.svg" height="12" width="12" alt="" />
      <span class="button-text"> Kill </span>
    </button>

    <button class="btn btn-secondary action-button">
      <img src="./../../assets/save.svg" height="14" width="14" alt="" />
      <span class="button-text"> Save </span>
    </button>
    convert to csv
    <button
      @click="beautifyEditorInput"
      class="btn btn-secondary action-button"
    >
      <img src="./../../assets/format.svg" height="14" width="14" alt="" />
      <span class="button-text"> Beautify </span>
    </button>

    <button @click="toggleLogPane" class="btn btn-secondary action-button">
      <img src="./../../assets/logs.svg" height="15" width="15" alt="" />
      <span class="button-text"> Logs </span>
    </button>

    <div class="spacer"></div>
    <div class="font-size-container">
      <button
        @click="changeEditorFontSize('increase')"
        class="btn btn-secondary action-button"
        :disabled="disabledTypeButtons.increase"
      >
        +
      </button>
      <img src="./../../assets/font-size.svg" height="20" width="20" alt="" />
      <button
        @click="changeEditorFontSize('decrease')"
        class="btn btn-secondary action-button"
        :disabled="disabledTypeButtons.decrease"
      >
        -
      </button>
    </div>
    <button
      @click="toggleEditorDirection"
      class="btn btn-secondary action-button"
    >
      <img
        v-if="editorDirection !== 'horizontal'"
        src="./../../assets/horizontal.svg"
        height="20"
        width="20"
        alt=""
      />
      <img
        v-else
        src="./../../assets/vertical.svg"
        height="20"
        width="20"
        alt=""
      />
    </button>

    <button class="btn btn-primary login-button">Login</button>
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

.login-button {
  margin-inline-start: 5px;
}

.font-size-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.font-size-container button {
  font-size: 14px;
}
</style>
