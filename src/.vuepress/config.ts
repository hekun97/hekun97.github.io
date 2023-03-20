import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  //站点设置
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "文档演示",
      description: "vuepress-theme-hope 的文档演示",
    },
  },
  //主题设置
  theme,
});
