---
title: "git补充知识"
description: ""
date: 2024-03-19
tags: ["git"]
---

* 配置 Git 使其对文件名大小写敏感
```sh
git config core.ignorecase false
```
* 获取某一个commit
```sh
git cherry-pick commit
```

### nu env $nu.env-path
```sh
$env.http_proxy = "http://127.0.0.1:xxx"
$env.https_proxy = "http://127.0.0.1:xxx"

$env.PATH = ($env.PATH | split row (char esep) | prepend [
    # 或 macOS/Linux
    "~/.local/bin"
])
```

### nu config $nu.config-path
```sh
#fnm
$env.config.hooks.env_change.PWD = [...$env.config.hooks.env_change.PWD
    { |_, after|
      if (($after | path join .node-version | path exists) or ($after | path join .nvmrc | path exists)) {
          fnm use --silent-if-unchanged
      }
    }]

def proxy-on [] {
    $env.http_proxy = "http://127.0.0.1:xxx"
    $env.https_proxy = "http://127.0.0.1:xxx"
    echo "代理已开启"
}

def proxy-off [] {
    hide-env http_proxy
    hide-env https_proxy
    echo "代理已关闭"
}

def proxy-status [] {
    if ($env | get -i http_proxy) != null {
        echo "代理已开启"
        echo $"http_proxy: ($env.http_proxy)"
        echo $"https_proxy: ($env.https_proxy)"
    } else {
        echo "代理已关闭"
    }
```