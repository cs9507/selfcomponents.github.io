const webpackbase = require('./webpack.base.config') 
const {merge} = require('webpack-merge');
const path=require('path')

module.exports = merge(webpackbase,{
    mode: 'production',
    entry:'./components/index.js',
    output:{
        path: path.resolve('mycomponents'),
        filename: 'mycomponents.min.js',
        library: 'mycomponents',   
        libraryTarget: "umd",
        umdNamedDefine: true 
    }
})