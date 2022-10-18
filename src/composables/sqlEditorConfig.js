import { reactive, toRefs, computed } from "vue";
import { format } from "sql-formatter";

const data = reactive({
  editorInput: "",
});

const beautifyEditorInput = () => {
  if (!data.editorInput) return;

  data.editorInput = format(data.editorInput, {
    language: "sql",
    tabWidth: 2,
    keywordCase: "upper",
  });
};

export default () => ({
  ...toRefs(data),
  beautifyEditorInput,
});
