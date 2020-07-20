const webpackbase = require('./webpack.base.config') 
const {merge} = require('webpack-merge');

module.exports = merge(webpackbase,{
    mode: 'production'
})