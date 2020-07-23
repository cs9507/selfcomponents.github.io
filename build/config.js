//配置开发服务的配置
const path = require('path')
module.exports = {
    mode:'development',
    devServer:{
        compress:true, // 开启gzip
        port:3000, // 更改端口号
    }
}