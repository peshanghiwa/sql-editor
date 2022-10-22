<script setup>
import { vOnClickOutside } from "@vueuse/components";
import { BIconTrashFill, BIconCircleFill } from "bootstrap-icons-vue";
import useEditorsConfig from "../../composables/editorsConfig";
const {
  tabs,
  deleteTabModalStatus,
  onTabClick,
  onTabDoubleClick,
  onRenameComplete,
  openDeleteTabModal,
  deleteTab,
  addNewTab,
} = useEditorsConfig();
</script>
<template>
  <section class="tabs-section-container">
    <div
      v-for="tab in tabs"
      @click="onTabClick(tab.id)"
      @dblclick="onTabDoubleClick(tab.id)"
      v-on-click-outside="() => tab.editable && onRenameComplete(tab.id)"
      class="tab-container"
      :class="{
        active: tab.open,
        editable: tab.editable,
        invalid:
          (tab.name === '' && tab.editable) ||
          tabs.find((t) => t.name === tab.name && t.id !== tab.id),
      }"
    >
      <input
        :key="tab.id"
        type="text"
        class="tab"
        :id="`tab_${tab.id}`"
        v-model="tab.name"
        @keyup.enter="onRenameComplete(tab.id)"
        :disabled="!tab.editable"
        placeholder="Tab must have a name"
        autocomplete="off"
      />
      <span class="tab-actions">
        <BIconCircleFill v-if="!tab.saved" class="icon icon-sm" />
        <button
          v-if="!tab.editable"
          @click="openDeleteTabModal"
          class="btn btn-secondary delete-button"
        >
          <BIconTrashFill class="icon icon-md" />
        </button>
      </span>
    </div>

    <button
      class="btn btn-primary new-tab-button"
      @click="addNewTab"
      v-if="!tabs.some((tab) => tab.editable)"
    >
      New Tab +
    </button>

    <vue-final-modal
      v-model="deleteTabModalStatus"
      classes="modal-container"
      content-class="modal-content"
    >
      <span class="modal__title"
        >Are you sure you want to delete this tab?</span
      >
      <div class="modal__buttons">
        <button class="btn btn-primary" @click="deleteTabModalStatus = false">
          Cancel
        </button>
        <button class="btn btn-primary" @click="deleteTab">Delete</button>
      </div>
    </vue-final-modal>
  </section>
</template>
<style scoped>
.tabs-section-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 50px;
  background-color: var(--background-color);
}

.tab-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.1s ease;
  padding-inline: 10px;
  height: 40px;
  cursor: pointer;
}

.tab-container:hover {
  background-color: var(--background-color-2);
}

.tab {
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  font-size: 14px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tab:focus {
  outline: none;
}

.tab-container.active {
  background-color: var(--background-color-3);
  color: var(--text-color);
  border-inline-start: 5px solid var(--primary-color-active);
}

.tab-container.editable {
  background-color: var(--text-edit-color);
}

.tab-container.editable .tab {
  cursor: text;
  color: var(--background-color);
}

.tab-container.invalid {
  background-color: rgb(255, 113, 113);
  color: #fff !important;
}

.tab-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

/* change placeholder color for invalid tab container */
.tab-container.invalid .tab::placeholder {
  color: rgba(255, 255, 255, 0.602);
}
.new-tab-button {
  width: 60%;
  margin-inline: auto;
  margin-top: 10px;
}
::v-deep(.modal-container) {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep(.modal-content) {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: none;
  border-radius: 0.25rem;
  background: var(--background-color-3);
}
.modal__buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  gap: 5px;
}

.modal__title {
  color: var(--text-color);
  font-weight: 700;
}
</style>
