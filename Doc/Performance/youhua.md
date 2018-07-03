## 优化策略
* 静态资源托管：图片、脚本、视频
* 外部脚本等（如Vue.js）使用国内公共CDN
* 分步加载
* 预判加载
* 一次请求加载完所有的数据
* 缓存耗时操作
* 脚本合并压缩

## 使用工具
* Chrome Audits
* Google PageSpeed Insights

## Preloading
* loading阶段，加载首页内容
* load事件后，加载产品数据（包含新品数据），并从新往旧分批加载图片

## Lazy Loading
* 产品列表页


## 加速渲染
* 给没有通过样式指定尺寸的`image`指定`width`和`height`属性

## Minimize HTTP Requests
* 图标sprite
* 合并CSS

## Use a CDN
Vue.js使用BootCDN上的

## Cache
https://stackoverflow.com/questions/6794033/google-speed-leverage-browser-caching
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching
https://stackoverflow.com/questions/4480304/how-to-set-http-headers-for-cache-control
http://dev.mobify.com/blog/beginners-guide-to-http-cache-headers/

### max-age 设置
* 崔振宽艺术
    * 艺术年表：31536000 一年
    * 作品：31536000 一年
    * 艺术影像
        * 视频：31536000 一年
* `ajax.php`： 3600 一小时
* sprite : 604800 一周




https://www.sitepoint.com/web-site-optimization-steps/
http://www.websiteoptimization.com/secrets/performance/
https://github.com/davidsonfellipe/awesome-wpo
http://web.jobbole.com/82297/
http://www.cnblogs.com/lei2007/archive/2013/08/16/3262897.html
https://www.zhihu.com/question/40505685
https://www.zhihu.com/question/33032042
