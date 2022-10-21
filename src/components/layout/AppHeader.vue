<script setup>
import {
  BIconStopFill,
  BIconPlayFill,
  BIconSave2Fill,
  BIconStars,
  BIconFileEarmarkMedicalFill,
  BIconFonts,
  BIconFileEarmarkFill,
  BIconLayoutSplit,
  BIconSunFill,
  BIconMoonFill,
  BIconList,
} from "bootstrap-icons-vue";
import useSplitpaneConfig from "../../composables/splitpaneConfig";
import useEditorsConfig from "../../composables/editorsConfig";
import useThemeConfig from "../../composables/themeConfig";
const { toggleSidebar, toggleEditorDirection, editorDirection, toggleLogPane } =
  useSplitpaneConfig();

const {
  beautifyEditorInput,
  changeEditorFontSize,
  disabledTypeButtons,
  saveTab,
  selectedTab,
  editorInput,
} = useEditorsConfig();

const { theme, setTheme } = useThemeConfig();
</script>

<template>
  <header>
    <button @click="toggleSidebar" class="btn btn-primary burger-button">
      <BIconList class="icon icon-lg" />
    </button>

    <button class="btn btn-secondary action-button">
      <BIconPlayFill class="icon icon-lg" />
      <span class="button-text"> Run </span>
    </button>

    <button class="btn btn-secondary action-button" disabled>
      <BIconStopFill class="icon icon-lg disabled" />
      <span class="button-text"> Kill </span>
    </button>

    <button
      class="btn btn-secondary action-button"
      @click="saveTab"
      :disabled="selectedTab.saved"
    >
      <BIconSave2Fill
        class="icon icon-md"
        :class="{ disabled: selectedTab.saved }"
      />
      <span class="button-text"> Save </span>
    </button>
    <button
      @click="beautifyEditorInput"
      class="btn btn-secondary action-button"
      :disabled="!editorInput"
    >
      <BIconStars class="icon icon-md" :class="{ disabled: !editorInput }" />
      <span class="button-text"> Beautify </span>
    </button>

    <button @click="toggleLogPane" class="btn btn-secondary action-button">
      <BIconFileEarmarkMedicalFill class="icon icon-md" />
      <span class="button-text"> Logs </span>
    </button>

    <button class="btn btn-secondary action-button">
      <BIconFileEarmarkFill class="icon icon-md" />
      <span class="button-text"> CSV </span>
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
      <BIconFonts class="icon icon-lg" />
      <button
        @click="changeEditorFontSize('decrease')"
        class="btn btn-secondary action-button"
        :disabled="disabledTypeButtons.decrease"
      >
        -
      </button>
    </div>
    <button
      @click="setTheme(theme === 'light' ? 'dark' : 'light')"
      class="btn btn-secondary action-button"
    >
      <component
        class="icon icon-md"
        :is="theme === 'dark' ? BIconSunFill : BIconMoonFill"
      />
    </button>
    <button
      @click="toggleEditorDirection"
      class="btn btn-secondary action-button"
    >
      <BIconLayoutSplit
        class="icon icon-md"
        :class="{ 'rotate-icon': editorDirection !== 'horizontal' }"
      />
    </button>

    <button class="btn btn-primary login-button">Login</button>
  </header>
</template>

<style scoped>
header {
  height: 60px;
  width: 100%;
  background-color: var(--background-color);
  border-bottom: 1px solid rgb(69, 69, 69);
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
