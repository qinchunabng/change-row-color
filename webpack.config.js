const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
//每次打包清理dist插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',//指定原文件的存放路径
    filename: './index.html'  //指定生成文件的存放路径
});
const cleanWebpackPlugin = new CleanWebpackPlugin();
//使用Node.js中的导出语法，向外导出一个webpack的配置对象
module.exports = {
    //在开发调试阶段，把值设置为eval-source-map，方便调试，在生产下，要关闭此配置
    devtool: 'eval-source-map',
    //或者设置为nosources-source-map，只显示源码行号，不显示源码
    //设置为source-map会显示源码行号和源码文件
    // devtool: 'nosources-source-map',
    //代表webpack的运行模式，可选值有development和production模式
    mode: 'development',
    //entry指定要处理哪个文件
    entry: path.join(__dirname,'./src/index.js'),
    //指定生成文件的路径和名称
    output:{
        //存放目录
        path: path.join(__dirname, 'dist'),
        //生成文件名
        filename:'js/bundle.js'
    },
    plugins:[htmlPlugin,cleanWebpackPlugin],
    devServer:{
        //首次打包后自动打开浏览器
        open: true,
        host: '127.0.0.1',
        //端口
        port: 80
    },
    module:{
        rules:[
            {
                //定义不同的模块对应的loader
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                //处理less的loader
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                //处理图片的loader
                //limit参数用来设置转base64图片的大小限制，低于这个大小的图片才转为base64
                test:/\.jpg|png|gif$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 22228,
                            outputPath: 'image' 
                        }
                    }
                ]
            },
            {
                //处理babel-loader处理高级的js语法
                test:/\.js$/,
                use:['babel-loader'],
                //排除node_modules
                exclude:'/node_modules/'
            }
        ]
    },
    resolve: {
        alias: {
            //告诉webpack，代码中@符号表示src这一层目录
            '@': path.join(__dirname,'./src/')
        }
    }
}