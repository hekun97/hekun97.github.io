import { navbar } from "vuepress-theme-hope";

export const Navbar = navbar([
  //"/",
  {
    text: "Java基础",
    icon: "java",
    link: "/JavaBase/1.Java-base/"
  },
  {
    text: "JavaWeb",
    icon: "java",
    link: "/JavaWeb/1.WEBServer-base/"
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