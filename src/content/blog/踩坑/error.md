---
title: "错误处理"
description: ""
date: 2024-03-19
tags: ["error"]
---

```javascript
// 引用第三方库，需要用到浏览器功能的可以写成组件后用异步导入
import dynamic from 'next/dynamic';
  const MyComponent = dynamic(() => import('./login'), {
  ssr: false,
});
```
```js
// 判断是否修改了选择的文件
try {
  // 这里读取文件
  // file文件是个对象按道理不能slice，但是继承自blob
  // blob可以看成二进制字符串，有slice方法
  // blob得arrayBuffer会把二进制转成arraybuffer，并且返回promise，转得过程就要读取文件
  await this.file.slice(0 ,1).arrayBuffer();
}catch (e) {
  this.$error(`选择的文件已经修改，请重新选择上传：${e}`);
  return;
}
```


```rust
use std "path add"
fnm env --json | from json | load-env
path add ($env.FNM_MULTISHELL_PATH + "/bin")
```