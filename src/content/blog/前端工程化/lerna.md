---
title: "lerna学习"
description: ""
date: 2024-03-19
tags: ["lerna"]
---

### 常用命令
#### lerna init
初始化一个lerna项目
固定模式（默认）：lerna init
独立模式：lerna init ----independent
#### lerna bootstrap
安装所有packages的依赖项并且连接本地包的交叉依赖项。
#### lerna import
导入存在的包
**案例1：**把路径为~/Users/Product的包导入到名为utilites的包里。
lerna import ~/Users/Product --dest=utilities
#### lerna add
将本地或者远程的包作为依赖项添加到当前的packages中，每次只能添加一个包。
案例1： 添加远程依赖包"chalk"到feu-ui的开发依赖库中，执行如下命令：
lerna add chalk --scope=feu-ui --dev
案例2： 添加本地包feu-tools到feu-app的依赖库中，执行如下命令：
lerna add feu-tools --scope=feu-app
#### lerna create
创建一个lerna管理的package包
案例1：
lerna create feu-tools
#### lerna clean
删除所有包下面的node_modules目录，也可以删除指定包下面的node_modules。
注意： 不会删除package.json里面的依赖项定义，也不会删除root目录的node_modules。
案例1: 只删除feu-ui包下面的node_modules目录
lerna clean --scope=feu-ui
#### lerna ls
列出所有公开的包（排除private=true的）
#### lerna changed
检查自上次发布以来有哪些包有更新。
#### lerna diff
查看自上次发布以来的所有包或者指定包的git diff变化。
#### lerna run
在包含该脚本命令的每个package内部执行npm script脚本命令,也可以指定在某个package下执行。
#### 在feu-ui包中执行build脚本命令
lerna run build --scope=feu-ui
#### lerna exec
在每个包中执行任意命令，也可以指定在某个package下执行。
案例1：
$ lerna exec -- npm view \$LERNA_PACKAGE_NAME
#### lerna link
将相互依赖的所有包Symlink链接在一起。
#### lerna version
版本迭代。
执行此命令，做了这几件事：

标识自上个标记版本依赖有更新的包。
提示输入新版本。
修改包元数据以反映新版本，在根目录和每个包中运行适当的生命周期脚本。
提交这些改动并标记提交。
推送到git远端。

版本更新原则：

存在feat提交： 需要更新minor版本
存在fix提交： 需要更新patch版本
存在BREAKING CHANGE提交： 需要更新大版本

#### lerna publish
发布需要发布的包，此命令可以既包含lerna version的工作，也可以单纯的只做发布操作。
根据不同的管理模式行为会不太一样。参考管理模式章节。
注意： 不会发布标记为私有（package.json中private=true）的包。
#### lerna publish
发布自上次发布以来有更新的包，包含了lerna version的工作。
#### lerna publish from-git
显示发布当前提交中标记的包，类似于先独立执行lerna version后，再执行此命令进行发布。
#### lerna publish from-package
显示发布npm registry中不存在的最新版本的包。
