//使用es6导入语法，导入jquery
import $ from 'jquery'

//导入样式（在webpack中，一切皆模块，都可以通过es6导入语法导入和使用）
import './css/index.css'
import './css/index.less'

//2.定义jquery的入口函数
$(function(){
    //3.实现奇偶行变色
    //奇数行为红色
    $('li:odd').css('background-color','yellow');
    $('li:even').css('background-color','gray');
});