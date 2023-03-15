const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,//关闭语法检查
  // devServer: {
  //   proxy: "http://localhost:5000"
  // }
  // devServer: {
  //   proxy: {
  //     "/api1": {
  //       target: "http://localhost:5000",
  //       pathRewrite: {"^/api1":""},//路径重写
  //       changeOrigin: false,
  //     },
  //     "/demo": {
  //       target: "http://localhost:5001",
  //       pathRewrite: {"^/demo":""}
  //     }
  //   }
  // }
})
