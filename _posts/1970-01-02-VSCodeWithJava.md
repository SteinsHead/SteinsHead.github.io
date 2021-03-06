---
layout: post
title:  "使用VSCode进行Java开发配置"
date:   1970-01-02 00:01 +0800
categories: christina update
---
最近尝试使用VSCode进行代码的写作，想要学习前端相关技术，同时想找到一个能代替idea的ide，idea实在是太过庞大了233

### 1. 配置Java开发插件

这个非常容易，在market里找到Java Extension Pack即可，这是一个集合了多个Java开发插件的插件包，详细信息如下：

![img](https://cdn.jsdelivr.net/gh/SteinsHead/ImageBed/img/2020/20200920225955.png)

但是当我安装完成插件的时候弹出了错误提示，大意是需要Java11或者以上的更高版本才可以Java1.8忠实用户流下了泪水

这并不难解决，我立即从网上下载了Java11的jdk工具包，并且将其路径添加到了环境变量里，可是最后还是出现了这个提示，这让我百思不得其解

### 2. 问题解决

当我看到安装信息中的提示时，同时看到了解决的方法

由于这个插件的报错信息主要是下面的插件导致的

![img](https://cdn.jsdelivr.net/gh/SteinsHead/ImageBed/img/2020/20200920230535.png)

因此最后我从它的安装信息上找到了解决方案：

![img](https://cdn.jsdelivr.net/gh/SteinsHead/ImageBed/img/2020/20200920230756.png)

也就是需要在setting.json文件中进行设置

后来发现还是需要进行java.home的设置，总的设置代码如下：

```
"java.home": "C:\\Program Files\\Java\\jdk-11.0.8",
    "java.configuration.runtimes": [
        {
            "name": "JavaSE-11",
            "path": "C:\\Program Files\\Java\\jdk-11.0.8",
        }
    ]
```

设定完成之后就不会继续报错了

可以继续编写Java项目了

<div align="center"><img src="https://cdn.jsdelivr.net/gh/SteinsHead/ImageBed/img/2020/77aab7d07316d73b1b639c71749d158e72620268.jpg"></div>