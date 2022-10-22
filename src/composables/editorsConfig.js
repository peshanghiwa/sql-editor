import { reactive, toRefs, computed, nextTick, watch } from "vue";
import { format } from "sql-formatter";
import usersJson from "../assets/data/users.json";

const data = reactive({
  editorInput: "",
  editorFontSize: "1.2rem",
  editorFontSizes: [
    "0.8rem",
    "1rem",
    "1.2rem",
    "1.4rem",
    "1.6rem",
    "1.8rem",
    "2rem",
    "2.2rem",
  ],
  tabs: [
    {
      id: 1,
      name: "Get All Users",
      open: true,
      editable: false,
      sqlTextarea: "",
      saved: true,
    },
    {
      id: 2,
      name: "Get All Universities",
      open: false,
      editable: false,
      sqlTextarea: "",
      saved: true,
    },
    {
      id: 3,
      name: "Get All Departments",
      open: false,
      editable: false,
      sqlTextarea: "",
      saved: true,
    },
  ],
  selectedTabId: 1,
  deleteTabModalStatus: false,
  queryRunnings: false,
  currentQueryResult: [],
});

watch(
  () => data.editorInput,
  (text) => {
    const activeEditorTab = data.tabs.find(
      (tab) => tab.id === data.selectedTabId
    );

    if (activeEditorTab.sqlTextarea !== text) {
      activeEditorTab.saved = false;
      activeEditorTab.sqlTextarea = text;
    }
  }
);

const selectedTab = computed(() =>
  data.tabs.find((tab) => tab.id === data.selectedTabId)
);

const beautifyEditorInput = () => {
  if (!data.editorInput) return;

  data.editorInput = format(data.editorInput, {
    language: "sql",
    tabWidth: 2,
    keywordCase: "upper",
  });
};

const changeEditorFontSize = (type) => {
  const currentSelectedFontIndex = data.editorFontSizes.findIndex(
    (size) => size === data.editorFontSize
  );

  if (currentSelectedFontIndex === 0 && type === "decrease") return;
  if (
    currentSelectedFontIndex === data.editorFontSizes.length - 1 &&
    type === "increase"
  )
    return;
  if (type === "increase") {
    data.editorFontSize = data.editorFontSizes[currentSelectedFontIndex + 1];
  }
  if (type === "decrease") {
    data.editorFontSize = data.editorFontSizes[currentSelectedFontIndex - 1];
  }
};

const disabledTypeButtons = computed(() => {
  const currentSelectedFontIndex = data.editorFontSizes.findIndex(
    (size) => size === data.editorFontSize
  );

  return {
    decrease: currentSelectedFontIndex === 0,
    increase: currentSelectedFontIndex === data.editorFontSizes.length - 1,
  };
});

const onTabClick = (selectedTabId) => {
  // if there is an open rename tab with no name, don't allow the user to open another tab
  if (data.tabs.some((tab) => tab.name === "" && tab.editable)) return;

  data.tabs.forEach((tab) => {
    if (selectedTabId === tab.id) {
      tab.open = true;
      data.selectedTabId = tab.id;
      data.editorInput = tab.sqlTextarea;
    } else {
      tab.open = false;
    }
  });
};

const onTabDoubleClick = async (selectedTabId) => {
  // if there is an open rename tab with no name, don't allow the user to rename another tab
  if (data.tabs.some((tab) => tab.name === "" && tab.editable)) return;
  data.selectedTabId = selectedTabId;

  data.tabs.forEach((tab) => {
    if (selectedTabId === tab.id) tab.editable = true;
    else tab.editable = false;
  });

  await nextTick();
  const renameInput = document.getElementById(`tab_${selectedTabId}`);
  renameInput.focus();
  renameInput.select();
};

const onRenameComplete = () => {
  // if the current editing tab name is empty, don't allow the user to dave it
  const selectedTab = data.tabs.find((tab) => tab.id === data.selectedTabId);
  if (selectedTab.name === "") return;

  if (
    data.tabs.find(
      (tab) => tab.name === selectedTab.name && tab.id !== selectedTab.id
    )
  )
    return;

  if (selectedTab.editable) {
    selectedTab.editable = false;
  }
};

const openDeleteTabModal = () => {
  data.deleteTabModalStatus = true;
};

const deleteTab = () => {
  const activeEditorTab = data.tabs.find(
    (tab) => tab.id === data.selectedTabId
  );

  if (activeEditorTab.open) {
    const nextTab = data.tabs.find((tab) => tab.id > activeEditorTab.id);
    if (nextTab) {
      nextTab.open = true;
      data.selectedTabId = nextTab.id;
      data.editorInput = nextTab.sqlTextarea;
    } else {
      const prevTab = data.tabs.find((tab) => tab.id < activeEditorTab.id);
      if (prevTab) {
        prevTab.open = true;
        data.selectedTabId = prevTab.id;
        data.editorInput = prevTab.sqlTextarea;
      }
    }
  }
  data.tabs = data.tabs.filter((tab) => tab.id !== activeEditorTab.id);
  data.deleteTabModalStatus = false;
};

const addNewTab = () => {
  const newTab = {
    id: data.tabs.length + 1,
    name: "New_Tab",
    open: true,
    editable: true,
    sqlTextarea: "",
    saved: true,
  };
  data.tabs.forEach((tab) => {
    tab.open = false;
  });
  data.tabs.push(newTab);
  onTabDoubleClick(newTab.id);
};

const saveTab = () => {
  const activeEditorTab = data.tabs.find(
    (tab) => tab.id === data.selectedTabId
  );
  activeEditorTab.saved = true;
};

const runQuery = () => {
  data.queryRunnings = true;
  const randomTime = Math.floor(Math.random() * 2000) + 2000;

  setTimeout(() => {
    data.queryRunnings = false;
    data.currentQueryResult = usersJson;
  }, randomTime);
};

const killQuery = () => {
  data.queryRunnings = false;
};

export default () => ({
  ...toRefs(data),
  beautifyEditorInput,
  changeEditorFontSize,
  onTabClick,
  onTabDoubleClick,
  onRenameComplete,
  openDeleteTabModal,
  deleteTab,
  addNewTab,
  saveTab,
  runQuery,
  killQuery,
  selectedTab,
  disabledTypeButtons,
});
