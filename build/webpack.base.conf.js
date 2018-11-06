'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {
  VueLoaderPlugin
} = require('vue-loader')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  // 多入口打包
  entry: {
    main: path.resolve(__dirname, '../src/') + '/main.ts',
    test: path.resolve(__dirname, '../src/scripts') + '/testIndex.ts'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ?
      config.build.assetsPublicPath :
      config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts', '.tsx'],
    alias: {
      '@': resolve('src'),
    }
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
        // options: vueLoaderConfig
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        // loader: 'ts-loader',
        use: [
          {
            loader: "ts-loader",
            options: {
              appendTsxSuffixTo: [/\.vue$/]
            }
          }
          //关闭tslint语法提示
          // ,
          // {
          //   loader: 'tslint-loader'
          // }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 100,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['../dist']),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: 'test.html',
      filename: 'test.html',
      chunks: ['test'],
    }),

    //拷贝模拟数据到dist目录
    // new CopyWebpackPlugin([{
    //   from: path.resolve(__dirname, '../src/apijson'),
    //   to: path.resolve(__dirname, config.build.assetsRoot, 'apijson')
    // }]),

  ]
}
