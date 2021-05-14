---
layout: post
title:  "发现了MarkDown的新功能"
date:   2021-05-14 13:25 +0800
categories: christina update
---

今天突然发现了MarkDown的新功能，就是md格式支持插入html代码，真是非常有意思，下面是相关功能的演示

我们都知道md插入图片的功能如何实现：
```
![a short description](the url of the picture)
```
但是这样插入的图片往往是默认靠左的，比如下面这个例子
![kerisu drink water](/assets/img/drink.jpg)

这里我们可以使用html代码来让图片居中显示
```
<div align="center"><img src="the picture url"></div>
```
效果就像下面这样所示
<div align="center"><img src="/assets/img/drink.jpg"></div>