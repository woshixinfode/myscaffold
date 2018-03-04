## 安装依赖---可根据自身要求增加或者减少
- 开发依赖
```
yarn add babel-core babel-loader babel-plugin-transform-decorators-legacy babel-preset-es2015 babel-preset-stage-0 css-loader style-loader less-loader less file-loader url-loader babel-preset-react webpack webpack-dev-server html-webpack-plugin --dev
```

- 项目依赖
```
yarn add react react-dom redux react-redux react-router-dom axios react-transition-group redux-logger redux-thunk redux-promise babel-polyfill react-swipe swipe-js-iso express body-parser express-session
```

## webpack设置根据需要进行设置

## 目录结构

 --src 主目录
  -api 连接后台接口目录 返回promise
    index 设置axios一些属性
    home 例子文件
  -common 公共样式 公共文件

