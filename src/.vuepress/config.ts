import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
   title: "专业治头秃",
  description: "在零与一的裂缝中预判所有可能的崩坏",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
