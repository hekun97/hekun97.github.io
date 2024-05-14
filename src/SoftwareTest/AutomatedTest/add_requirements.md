---
title: 生成依赖包文件
order: 10
tag: 
  - requirements
---

## 1. requirements.txt

用于记录所有依赖包和它的确切版本号。

### 1.1. 使用

当我们拿到一个项目时，首先要在项目运行环境安装 requirement.txt 所包含的依赖：

```bash
pip install -r requirement.txt
```

当我们要把环境中的依赖写入 requirement.txt 中时，可以借助 `freeze` 命令：

```bash
pip freeze >requirements.txt
```

## 2. 环境混用怎么办？

在导出依赖到 requirement.txt 文件时会有一种尴尬的情况。

你的本地环境不仅包含项目 A 所需要的依赖，也包含着项目 B 所需要的依赖。此时我们要如何做到只把项目 A 的依赖导出呢？

[pipreqs](https://link.zhihu.com/?target=https%3A//github.com/bndr/pipreqs) 可以通过扫描项目目录，帮助我们仅生成当前项目的依赖清单。

### 2.1.安装

```bash
pip install pipreqs
```

### 2.2.运行

```bash
pipreqs ./ --encoding=utf8 --force
```

::: info 信息

- .代表的是将导出依赖包的文件放在当前目录下
- --encofing=utf-8代表的是文件编码方式为utf-8格式
- --force为强制执行

:::

执行完毕后，在根目录下会生成requirements.txt文件，就是当前项目的依赖包文件