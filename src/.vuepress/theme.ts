import { hopeTheme } from "vuepress-theme-hope";
import { Navbar } from "./navbar.js";
import { Sidebar } from "./sidebar.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: {
    name: "Mr.he",
    url: "https://github.com/hekun97",
  },
  //图标地址
  iconAssets: "//at.alicdn.com/t/c/font_3964306_8fx1p02f11x.css",
  //站点logo
  logo: "/Dinosaur-logo.jpg",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "demo/theme-docs/src",

  //主题色选择器
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  locales: {
    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: Navbar,

      // sidebar
      sidebar: Sidebar,

      footer: "默认页脚",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    comment: {
      // @ts-expect-error: You should generate and use your own comment service
      provider: "Waline",    
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      //为你添加提示、注释、信息、注意、警告和详情自定义容器的支持。
      container: true,
      demo: true,
      echarts: true,
      //为图像添加描述
      figure: true,
      flowchart: true,
      gfm: true,
      //启用图片懒加载
      imgLazyload: true,
      //// 启用图片大小
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});