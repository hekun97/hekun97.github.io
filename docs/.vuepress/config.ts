import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  //站点设置
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "专业治头秃的学习笔记",
      description: "不断学习中的学习笔记记录",
    },
  },
  //主题设置
  theme,
});
