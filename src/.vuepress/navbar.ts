import { navbar } from "vuepress-theme-hope";

export const Navbar = navbar([
  //"/",
  {
    text: "Java笔记",
    icon: "java",
    prefix: "/java/",
    children: [
      {
        text: "JavaWeb",
        link: "JavaWeb/Tomcat-base",
      }
    ],
  },
  { text: "案例", icon: "discovery", link: "/demo/" },
  {
    text: "指南",
    icon: "creative",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "note",
    link: "https://theme-hope.vuejs.press/zh/",
  },
  {
    text: "Mac使用相关",
    icon: "mac",
    link: "/mac/",
  },
  {
    text: "git笔记",
    icon: "git",
    link: "/git/",
  },
  {
    text: "vuepress折腾",
    icon: "vue",
    link: "/vuepress/",
  },
]);