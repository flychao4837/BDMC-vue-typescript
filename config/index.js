
'use strict'
// Template version: 1.1.3
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');
const localHost = "http://127.0.0.1:8080";
const remoteHost = "xx"
const requestOrigin = "xx"

const debugHost = localHost;
const debugFilePath = "/apijson"
module.exports = {
  build: {
    env: require('./prod.env'),

    index: path.resolve(__dirname, '../dist/index.html'),
    test: path.resolve(__dirname, '../dist/test.html'),
    parent : path.resolve(__dirname, '../dist/parent.html'),


    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: "/",//'/bdmc-web/',
    productionSourceMap: true,

    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: process.env.PORT || 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      // '/schoolAppInfoStatisticsTodayTopN': {
      //   // api表示当前项目请求的key 
      //   target: debugHost,
      //   // 代理服务器路径 
      //   pathRewrite: {
      //     '^/schoolAppInfoStatisticsTodayTopN': debugFilePath + '/schoolAppInfoStatisticsTodayTopN.json'
      //   },
      //   // 重写路径 
      //   changeOrigin: true
      // }
    },

    cssSourceMap: false
  }
}
