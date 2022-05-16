//使用es6导入语法，导入jquery
import $ from 'jquery'

//2.定义jquery的入口函数
$(function(){
    //3.实现奇偶行变色
    //奇数行为红色
    $('li:odd').css('background-color','yellow');
    $('li:even').css('background-color','gray');
});