import useEditorsConfig from "./editorsConfig";
import useSplitpaneConfig from "./splitpaneConfig";
const { toggleSidebar, toggleLogPane, toggleEditorDirection } =
  useSplitpaneConfig();

const {
  saveEditorInput,
  selectedTab,
  runQuery,
  editorInput,
  queryRunnings,
  killQuery,
  beautifyEditorInput,
  changeEditorFontSize,
  disabledTypeButtons,
} = useEditorsConfig();

const onSaveEditorInput = () => {
  if (selectedTab?.value?.saved) return;
  saveEditorInput();
};

const onRunQuery = () => {
  if (!editorInput.value || queryRunnings.value) return;
  runQuery();
};

const onKillQuery = () => {
  if (!queryRunnings.value) return;
  killQuery();
};

const onBeautify = () => {
  if (!editorInput.value) return;
  beautifyEditorInput();
};
const onChangeFontSize = (size) => {
  if (size === "increase" && disabledTypeButtons.value.increase) return;
  if (size === "decrease" && disabledTypeButtons.value.decrease) return;
  changeEditorFontSize(size);
};
// Prevent default behavior of the following keys:
document.addEventListener(
  "keydown",
  function (e) {
    // CTRL + S
    if (
      e.key === "s" &&
      (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
    ) {
      e.preventDefault();
      onSaveEditorInput();
    }

    // CTRL + ENTER
    if (
      e.key === "Enter" &&
      (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
    ) {
      e.preventDefault();
      onRunQuery();
    }

    // ESC
    if (e.key === "Escape") {
      e.preventDefault();
      onKillQuery();
    }

    // CTRL + B
    if (
      e.key === "b" &&
      (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
    ) {
      e.preventDefault();
      toggleSidebar();
    }

    // CTRL + H
    if (
      e.key === "h" &&
      (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
    ) {
      e.preventDefault();
      onBeautify();
    }

    // CTRL + J
    if (
      e.key === "j" &&
      (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
    ) {
      e.preventDefault();
      toggleLogPane();
    }

    // CTRL + +
    if (
      e.key === "=" &&
      (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
    ) {
      e.preventDefault();
      onChangeFontSize("increase");
    }

    // CTRL + -
    if (
      e.key === "-" &&
      (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
    ) {
      e.preventDefault();
      onChangeFontSize("decrease");
    }

    // CTRL + /
    if (
      e.key === "/" &&
      (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
    ) {
      e.preventDefault();
      toggleEditorDirection();
    }
  },
  false
);

export default () => ({});
