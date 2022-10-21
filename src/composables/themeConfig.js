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

  //remove the line below
  setCssVariables(theme);
};

const setCssVariables = (theme) => {
  //     --primary-color: #c84b31;
  //   --primary-color-hover: #b43d25;
  //   --primary-color-active: #942b16;

  if (theme === "dark") {
    // root.style.setProperty("--primary-color", "#c84b31");
    // root.style.setProperty("--primary-color-hover", "#b43d25");
    // root.style.setProperty("--primary-color-active", "#942b16");
  } else {
    // root.style.setProperty("--primary-color", "#c84b31");
    // root.style.setProperty("--primary-color-hover", "#b43d25");
    // root.style.setProperty("--primary-color-active", "#942b16");
  }
};

export default () => {
  const activeTheme = cookies.get("theme") || "dark";
  setTheme(activeTheme);

  return {
    ...toRefs(data),
    setTheme,
  };
};
