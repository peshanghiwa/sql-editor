<script setup>
import { nextTick, ref } from "vue";
import { vOnClickOutside } from "@vueuse/components";

const tabs = ref([
  {
    id: 1,
    name: "Users_Queries",
    open: true,
    editable: false,
  },
  {
    id: 2,
    name: "Posts_Queries",
    open: false,
    editable: false,
  },
  {
    id: 3,
    name: "Comments_Queries",
    open: false,
    editable: false,
  },
]);

const onTabClick = (selectedTabId) => {
  // if there is an open rename tab with no name, don't allow the user to open another tab
  if (tabs.value.some((tab) => tab.name === "" && tab.editable)) return;
  tabs.value.forEach((tab) => {
    if (selectedTabId === tab.id) tab.open = true;
    else tab.open = false;
  });
};

const onTabDoubleClick = async (selectedTabId) => {
  // if there is an open rename tab with no name, don't allow the user to rename another tab
  if (tabs.value.some((tab) => tab.name === "" && tab.editable)) return;

  tabs.value.forEach((tab) => {
    if (selectedTabId === tab.id) tab.editable = true;
    else tab.editable = false;
  });
  await nextTick();
  document.getElementById(`tab_${selectedTabId}`).focus();
};

const onRenameComplete = (selectedTabId) => {
  // if the current editing tab name is empty, don't allow the user to dave it
  const selectedTab = tabs.value.find((tab) => tab.id === selectedTabId);
  if (selectedTab.name === "") return;

  if (selectedTab.editable) {
    selectedTab.editable = false;
  }
};

const selectedTab = ref(null);
const deleteTabModalStatus = ref(false);
const openDeleteTabModal = (selectedTabId) => {
  selectedTab.value = tabs.value.find((tab) => tab.id === selectedTabId);
  deleteTabModalStatus.value = true;
};
const deleteTab = () => {
  if (selectedTab.value.open) {
    const nextTab = tabs.value.find((tab) => tab.id > selectedTab.value.id);
    if (nextTab) {
      nextTab.open = true;
    } else {
      const prevTab = tabs.value.find((tab) => tab.id < selectedTab.value.id);
      if (prevTab) {
        prevTab.open = true;
      }
    }
  }
  tabs.value = tabs.value.filter((tab) => tab.id !== selectedTab.value.id);
  deleteTabModalStatus.value = false;
};

const addNewTab = () => {
  const newTab = {
    id: tabs.value.length + 1,
    name: "New_Tab",
    open: true,
    editable: true,
  };
  tabs.value.forEach((tab) => {
    tab.open = false;
  });
  tabs.value.push(newTab);
  onTabDoubleClick(newTab.id);
};
</script>
<template>
  <section class="tabs-section-container">
    <div
      v-for="tab in tabs"
      @click="onTabClick(tab.id)"
      @dblclick="onTabDoubleClick(tab.id)"
      v-on-click-outside="() => onRenameComplete(tab.id)"
      class="tab-container"
      :class="{
        active: tab.open,
        editable: tab.editable,
        invalid: tab.name === '' && tab.editable,
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
      <button
        v-if="!tab.editable"
        @click="openDeleteTabModal(tab.id)"
        class="btn btn-secondary delete-button"
      >
        <img src="../../assets/delete.svg" width="15" alt="" />
      </button>
    </div>

    <button class="btn btn-primary new-tab-button" @click="addNewTab">
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
  color: #fff;
  border-inline-start: 5px solid var(--primary-color-active);
}

.tab-container.editable {
  background-color: #e5e5e5;
  color: black;
}

.tab-container.editable .tab {
  cursor: text;
  color: black;
}

.tab-container.invalid {
  background-color: rgb(255, 113, 113);
  color: #fff;
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
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  color: black;
  font-weight: 700;
}
.modal__buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  gap: 5px;
}
</style>
