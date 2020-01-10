const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    mode: 'development', // 开发模式
    entry: {
        main:path.resolve(__dirname,'../src/main.js'),    // 入口文件
        header:path.resolve(__dirname,'../src/header.js')    // 入口文件
    },
    output: {
        filename: '[name].[hash:8].js', // 打包后的文件名称
        path: path.resolve(__dirname,'../dist') // 打包后的文件目录
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../public/index.html'),
            filename:'index.html',
            chunks:['main'] // 与入口文件对应的模块名
          }),
          new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../public/header.html'),
            filename:'header.html',
            chunks:['header'] // 与入口文件对应的模块名
          }),
        new CleanWebpackPlugin() //打包前输出清空文件夹
    ]
}