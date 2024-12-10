记录几种特殊场景进入小程序
　　　　　　2021-09-10766浏览4评论
最近跟别的项目对接，遇见几种不同的场景，记录一下。

一、小程序打开另一个小程序（可选择开发/体验/正式版）
navigator组件 和 wx.navigateToMiniProgram API

这个文档写的挺详细的就不多说了。

https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html

https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html

二、扫描普通二维码打开小程序（可选择开发/体验/正式版）
1、二维码链接配置

首先配置普通二维码地址：小程序管理后台--开发管理--开发设置--扫普通链接二维码打开小程序，配置好二维码规则之后，使用符合规则的链接生成普通二维码，扫码就可进入对应页面。测试的时候需要把完整二维码地址添加到测试链接处保存配置，如果二维码链接符合规则但是没有配置到管理后台，扫码之后就会进入正式版对应页面。

2、二维码内容获取

在小程序后台配置二维码跳转小程序规则之后即可使用微信（6.5.6及其以上客户端版本）扫码打开小程序。二维码链接内容会以参数 q 的形式带给页面，在onLoad事件中提取 q 参数并自行 decodeURIComponent 一次，即可获取原二维码的完整内容。

	Page({
          onLoad(query) {
            const q = decodeURIComponent(query.q) // 获取到二维码原始链接内容
            const scancode_time = parseInt(query.scancode_time) // 获取用户扫码时间 UNIX 时间戳
          }
        })
参考文档https://developers.weixin.qq.com/miniprogram/introduction/qrcode.html

三、服务号绑定“JS接口安全域名”下的网页跳转小程序（只支持正式版）
微信开放标签 wx-open-launch-weapp

注意：微信版本要求为：7.0.12及以上，系统版本要求为：iOS 10.3及以上、Android 5.0及以上

接收参数：在页面onLoad周期函数获取 a = options.a, b=options.b

参考文档https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_Open_Tag.html#21

四、短信、邮件、外部网页、微信内等拉起小程序（只支持正式版）
1）无参数或者参数固定

打开小程序管理后台--右上角处工具--生成URL Scheme，按要求选择填写即可，复制生成的URL Scheme，如下示例：

location.href = 'weixin://dl/business/?t= *TICKET*'

该跳转方法可以在用户打开 H5 时立即调用，也可以在用户触发事件后调用。



也可通过调用服务端接口生成，感觉完全没必要那么麻烦，不推荐！

2）动态参数

通过调用服务端接口生成，文档https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/url-scheme/urlscheme.generate.html根据文档调用就行，比较详细了。

请求示例：

	{
            "jump_wxa":
            {
                "path": "/pages/publishHomework/publishHomework",
                "query": "a=123&b=321"
            },
            "is_expire":true,
            "expire_time":1606737600
        }
这里主要说一下，接收参数，文档没看到，亲测：在页面onLoad周期函数获取 a = options.a, b=options.b