## 相关技术
* 技术栈：react react-dom react-router-dom AntDesign axios ie8等
* 封装了一些企业前端开发常用组件，且通过脚本异步加载方式集成了webuploader/sockjs/echarts等流行组件
* 开发环境 node || 构建工具 webpack1
* 支持无刷新热更新，css抽取，gzip压缩，模块分片异步加载，url图片抽取
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

采用 `react` 和 `Ant Design` 兼容到浏览器 `IE8`
* 项目初期参考了大神HeavenSky：https://github.com/HeavenSky/react-antd-ie8的分享的项目react-antd-ie8
* 具体请见 `package.json`
* 相关plugin如果报错，则换较低版本再试，注意不同版本的配置区别