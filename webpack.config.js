const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',//指定原文件的存放路径
    filename: './index.html'  //指定生成文件的存放路径
});
//使用Node.js中的导出语法，向外导出一个webpack的配置对象
module.exports = {
    //代表webpack的运行模式，可选值有development和production模式
    mode: 'development',
    //entry指定要处理哪个文件
    entry: path.join(__dirname,'./src/index.js'),
    //指定生成文件的路径和名称
    output:{
        //存放目录
        path: path.join(__dirname, 'dist'),
        //生成文件名
        filename:'bundle.js'
    },
    plugins:[htmlPlugin]
}