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
    text: "Java框架",
    icon: "java",
    link: "/JavaFrame/2.SpringMVC/day01/"
  },
  {
    text: "Mac使用相关",
    icon: "mac",
    link: "/mac/",
  },
  {
    text: "功能测试",
    icon: "ceshi",
    link: "/SoftwareTest/FunctionTest/",
  },
  {
    text: "接口测试",
    icon: "ceshi",
    link: "/SoftwareTest/InterfaceTest/",
  },
  {
    text: "性能测试",
    icon: "ceshi",
    link: "/SoftwareTest/PerformanceTest/",
  },
  {
    text: "自动化测试",
    icon: "ceshi",
    link: "/SoftwareTest/AutomatedTest/",
  },
  {
    text: "SQL语句汇总",
    icon: "ceshi",
    link: "/Expansion/SQL/",
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
