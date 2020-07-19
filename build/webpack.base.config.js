const { VueLoaderPlugin} = require("vue-loader")
const path  = require('path')
const webpack = require('webpack')
const htmlWepackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
    entry:'./main.js',
    output:{
      path:path.resolve(__dirname, 'dist'),
      filename: '[name].[contentHash].bundle.js'
    },
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
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        },
        {
          test:/\.(sa|sc|c)ss$/,
          use:[
            MiniCssExtractPlugin.loader,
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
  }