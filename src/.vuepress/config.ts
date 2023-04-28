import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
//代码高亮
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { blog } from "vuepress-theme-hope";

export default defineUserConfig({
  //站点设置
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "专业治头秃",
      description: "不断学习中的学习笔记记录",
    },
  },
  //主题设置
  theme,
  // 解析 h4 标头
  markdown: {
    headers: {
      level: [2, 3, 4, 5, 6]
    }
  },

  plugins: [
    // 全文搜索插件
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],
});