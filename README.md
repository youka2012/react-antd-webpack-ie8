## 相关技术
* 技术栈：react react-dom react-router-dom AntDesign axios es6等
* 支持ie8
* 封装了一些企业前端开发常用组件，且通过脚本异步加载方式集成了webuploader/sockjs/echarts等流行组件
* 开发环境 node || 构建工具 webpack1
* 支持开发环境，无刷新热更新，css抽取，代码压缩/混淆，gzip压缩，模块分片异步加载，url图片抽取
* 支持可视化模块打包分析，支持IDE源码断点调试
* 推荐IDE： VsCode(免费好用) WebStorm（专业前端，收费 非常好用）


## 开发坏境启动
`npm install`

	* 如果不联网，可直接解压node_modules.zip

`npm start`

	* 浏览器打开[http://localhost:8888](http://localhost:8888) 支持热更新

	* 开发环境常用配置已经抽取在my-dev-config.js

## 生产坏境部署
`npm run build`

	* 拷贝dist文件夹内容至服务器即可，也可以通过gulp等自动化工具自动拷贝到相关路径


## 说明

采用 `webpack`,`react` 和 `Ant Design` 等技术，兼容到浏览器 `IE8`
* 项目初期参考了大神HeavenSky：https://github.com/HeavenSky/react-antd-ie8的分享的项目react-antd-ie8
* 具体请见 `package.json`
* 相关plugin如果报错，则尝试较低版本，注意不同版本的配置区别！！
* 项目中涉及网络请求的地方已替换为模拟数据，网络请求的代码保留已在注释中。

## 欢迎交流分享！！！