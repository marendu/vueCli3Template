// vue.config.js
module.exports = {
  publicPath: '/',
  outputDir: 'dist', // 打包的目录
  assetsDir: 'static',//静态资源
  lintOnSave: false, // 在保存时校验格式
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  devServer: {
    open: true, // 启动服务后是否打开浏览器
    host: 'localhost',
    port: 8081, // 服务端口
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {}
  },
}