---
layout: post
title:  "WordPress错误"
date:   2021-04-26 19:08 +0800
categories: christina update
---

今天想要安装新主题时提示了错误：上传的文件尺寸超过upload_max_filesize文件中定义的php.ini值。

解决方法：修改/etc/php/7.4/apache2/php.ini文件（这里的版本根据自己的php版本不同需要自己改变）

其中post_max_size设定为64M，upload_max_filesize也设定为64M，即可解决上传文件的问题

但是在这之后又出现了新的问题：无法建立目录wp-content/uploads/2020/08。有没有上级目录的写权限？

在查询资料之后，找到了解决方法：

首先更改wordpress数据库中的wp_options字段

update wp_options set option_value = “wp-content/uploads” where option_name = “upload_path”;

然后在wordpress目录下更改权限

chmod 777 ./wp-content

即可解决没有权限的问题