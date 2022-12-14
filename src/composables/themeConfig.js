import { reactive } from "vue";
import { toRefs } from "vue";
import { useCookies } from "vue3-cookies";
const root = document.querySelector(":root");
const { cookies } = useCookies();

const data = reactive({
  theme: "dark",
});

const setTheme = (theme) => {
  data.theme = theme;
  cookies.set("theme", theme);
  setCssVariables(theme);
};

const setCssVariables = (theme) => {
  if (theme === "dark") {
    root.style.setProperty("--background-color", "#1a1a1a");
    root.style.setProperty("--background-color-2", "#202020");
    root.style.setProperty("--background-color-3", "#303030");
    root.style.setProperty("--text-color", "#ffffff");
    root.style.setProperty("--text-edit-color", "#e5e5e5");
  } else {
    root.style.setProperty("--background-color", "#ffffff");
    root.style.setProperty("--background-color-2", "#f0f0f0");
    root.style.setProperty("--background-color-3", "#dddddd");
    root.style.setProperty("--text-color", "#000000");
    root.style.setProperty("--text-edit-color", "#4a4a4a");
  }
};

const activeTheme = cookies.get("theme") || "dark";
setTheme(activeTheme);

export default () => {
  return {
    ...toRefs(data),
    setTheme,
  };
};
