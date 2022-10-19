import { reactive, toRefs, computed } from "vue";
import { format } from "sql-formatter";

const data = reactive({
  editorInput: "",
  editorFontSize: "1.2rem",
});

const beautifyEditorInput = () => {
  if (!data.editorInput) return;

  data.editorInput = format(data.editorInput, {
    language: "sql",
    tabWidth: 2,
    keywordCase: "upper",
  });
};

const changeEditorFontSize = (type) => {
  const sizes = [
    "0.8rem",
    "1rem",
    "1.2rem",
    "1.4rem",
    "1.6rem",
    "1.8rem",
    "2rem",
  ];

  const currentSelectedFontIndex = sizes.findIndex(
    (size) => size === data.editorFontSize
  );

  if (currentSelectedFontIndex === 0 && type === "decrease") return;
  if (currentSelectedFontIndex === sizes.length - 1 && type === "increase")
    return;
  if (type === "increase") {
    data.editorFontSize = sizes[currentSelectedFontIndex + 1];
  }
  if (type === "decrease") {
    data.editorFontSize = sizes[currentSelectedFontIndex - 1];
  }
};

const disabledTypeButtons = computed(() => {
  const sizes = ["0.8rem", "1rem", "1.2rem", "1.4rem", "1.6rem"];

  const currentSelectedFontIndex = sizes.findIndex(
    (size) => size === data.editorFontSize
  );

  return {
    decrease: currentSelectedFontIndex === 0,
    increase: currentSelectedFontIndex === sizes.length - 1,
  };
});

export default () => ({
  ...toRefs(data),
  beautifyEditorInput,
  changeEditorFontSize,
  disabledTypeButtons,
});
