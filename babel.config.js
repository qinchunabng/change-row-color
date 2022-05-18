module.exports={
    //声明babel可用插件
    //webpack在调用babel-classloader的时候，会先加载plugins插件来使用
    plugins:[['@babel/plugin-proposal-decorators', { legacy: true }]]
}