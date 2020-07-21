const webpackbase = require('./webpack.base.config') 
const {merge} = require('webpack-merge');
const htmlWepackPlugin = require('html-webpack-plugin')
const path  = require('path')
const config = require('./config.js')

module.exports = merge(webpackbase,{
    mode: 'development',
    devServer: config.devServer,
    entry:'./main.js',
    output:{
      path:path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      chunkFilename: '[name].[hash].js',
      publicPath: "/", //开发运行的路径
    },
    plugins:[
        new htmlWepackPlugin(
            {
              template:'./index.html',
              hash: true, // 在引用资源的后面增加hash戳
              minify: {
                removeComments: true,
                collapseWhitespace: true, 
                removeAttributeQuotes: true //删除属性双引号
              },
            }
          )
    ]
})