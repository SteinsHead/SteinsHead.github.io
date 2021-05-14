---
layout: post
title:  "Word Press似乎出现了一些问题"
date:   1970-01-05 00:01 +0800
categories: christina update
---
当我想要在摘要里加入一些奇奇怪怪的东西的时候，他会崩溃

今天，当我在wordpress里的文章摘要里加入我文章开头的一段代码时，出现了错误，如下图所示：

![img](https://cdn.jsdelivr.net/gh/SteinsHead/ImageBed/img/2020/20201010200702.png)

当我的网安大佬们得知这件事之后说：这是xss

那么什么是xss？

![img](https://cdn.jsdelivr.net/gh/SteinsHead/ImageBed/img/2020/20201010200147.png)

维基百科上的解释入上图所示，那么这个问题也就找到了，我的摘要是这样书写的：

```
当我开始学习vue的时候，我已经不想在html页面中来加入<script>各种各样的脚本标签
```

注意到了吗，上面出现了html中常用的引入.js文件的标签，因此这就是这次事故的罪魁祸首，也许是wordpress让摘要中的文字直接显示成为了html，关于这一部分的内容，我还要在后面的学习中继续寻找答案

最后，如何消除这种影响，目前发现的解决办法，是可以通过加入转义符号”\”来消除影响的，但是代价也是有的，我们加入的`<script>`将不能显示在摘要中