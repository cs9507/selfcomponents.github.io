const { VueLoaderPlugin} = require("vue-loader")
const path  = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('src'),
      }
    },
    module:{
      rules: [
        {
          test:/\.vue$/,
          use: {
            loader: 'vue-loader'
          }
        },
        {
          test:/\.js$/,
          exclude: /node_modules/,
          use:{
            loader:'babel-loader',
            options:{
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime','@babel/plugin-transform-modules-umd']  //plugin-transform-modules-umd 解决本地打包umd格式无法直接引用的问题
            }
          }
        },
        {
          test:/\.(sa|sc|c)ss$/,
          use:[
            MiniCssExtractPlugin.loader,//用来替换style-loader 不用再装style-loader
            'css-loader',
            {
              loader: 'postcss-loader',
              options:{
                plugins: ()=>{
                  [
                    require('autoprefixer')({
                        "overrideBrowserslist": [
                            ">0.25%",
                            "not dead"
                        ]
                    })
                ]}
              }
            },
            'sass-loader'
          ],
          exclude:/node_modules/
        }
    ],
    },
    plugins:[
      new MiniCssExtractPlugin({
        filename: 'css/[name].css'
    }),
      new VueLoaderPlugin(),
      new webpack.ProgressPlugin(),
    ]
  }