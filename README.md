## 相关技术
* 技术栈：react react-dom react-router antd jquery 等
* 开发环境 node || 构建工具 webpack
* 推荐IDE： VsCode(免费好用) WebStorm（专业前端，收费 非常好用）


## 开发坏境启动
1. `npm install`
2. `npm run dev`
3. 浏览器打开[http://localhost:8888](http://localhost:8888)，地址在webpack,cfg.dev.js配置
api接口的反向代理在dev-proxy-config配置

## 生产坏境部署
1. `npm install` 若在前面运行过此命令, 可跳过
2. `npm run build`
3. 拷贝dist文件夹内容至服务器即可，也可以通过copy-webpack-plugin自动拷贝到相关路径


## 说明

采用 `react` 和 `Ant Design` 兼容到浏览器 `IE8`
* 项目初期参考了大神：https://github.com/HeavenSky/react-antd-ie8的分享的项目
* 采用低版本兼容的 `dependency` 有 `react@0.x` `antd@1.x` `jquery@1.x` compression-webpack-plugin@1.x
* 具体请见 `package.json`
* 相关plugin如果报错，则换较低版本再试，注意不同版本的配置区别
* 关于 `dev dependency` 低版本兼容的比较多, 就不一一列举了, 具体请见 `package.json`

## 技术栈介绍
* 引入了 `antd` `cross-env` `less` `happypack` `autoprefixer`, 以及配置上的加入多个单页应用的处理
* 关于 `redux` 的是否使用, 看项目需求
* 关于组件之间通信, 一般有如下做法
	* 通过父组件的箭头函数进行子组件之间的通信
	* 通过组件的 `ref` 属性获取组件, 然后直接调用组件的方法
	* 如果想要两个不关联的组件进行通信, 推荐两个插件, 都简单易用(支持 ie8+)
		* [pubsub-js](https://npmjs.com/package/pubsub-js) 介绍中有具体例子
		* [signals](https://npmjs.com/package/signals) 具体例子要看 [这个页面](https://github.com/millermedeiros/js-signals/wiki/Examples)
	* 组件不要嵌套太深,<=3
* 配置新增 `antd` 支持 （react前端UI库 阿里出品）
	* 兼容 IE8 需要引入 `media-match`
	* 按需引入 `babel-plugin-import`
* 配置新增 `less` 支持
* 配置新增 `cross-env` 支持, 设置生产环境和开发环境
* 配置新增 `cssnano` 支持, css 自动压缩和筛减
* 配置新增 `autoprefixer` 支持, css 自动添加浏览器兼容前缀
* 配置新增 `copy-webpack-plugin` 支持
* 配置新增 `friendly-errors-webpack-plugin` 支持
* 配置优化 `output` 绝对路径改相对路径
* 配置优化 `bundle-loader` 的组件创造函数, 具体见 `src/utils/bundle.js`
* 新增兼容 `antd表格表头和列固定的时候` 报错 `IE8 不支持 onScroll 事件`, 具体见 `src/utils/antd.js`
* 新增兼容 `es5-shim`, 支持到 IE8 所必须
* 新增使用 Mock
	* var Mock = require('mockjs');
	* var data = Mock.mock({
    *  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    *  'list|1-10': [{
    *      // 属性 id 是一个自增数，起始值为 1，每次增 1
    *     'id|+1': 1
    *  }]
    * });
    *// 输出结果
    * console.log(JSON.stringify(data, null, 4));
* 创建项目文件初始结构


## 代码规范参考
* [js规范es5,es6,react](https://github.com/airbnb/javascript)
* [js规范中文版](https://github.com/yuche/javascript)
* [React规范中文版](https://github.com/JasonBoy/javascript/tree/master/react)
* [es5规范中文版](https://github.com/sivan/javascript-style-guide/tree/master/es5)
* [eslint规则](http://eslint.cn/docs/rules)
* [js标准化介绍](https://standardjs.com/readme-zhcn.html)
* [js标准化规则](https://standardjs.com/rules-zhcn.html)

