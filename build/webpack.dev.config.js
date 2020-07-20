const webpackbase = require('./webpack.base.config') 
const {merge} = require('webpack-merge');

module.exports = merge(webpackbase,{
    mode: 'development',
    devServer:{
        proxy: {},
        compress:true, // 开启gzip
        port:3000, // 更改端口号
    }
})