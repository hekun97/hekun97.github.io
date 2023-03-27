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
        link: "JavaWeb/01.Tomcat/01.WEBServer-base",
      }
    ],
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
