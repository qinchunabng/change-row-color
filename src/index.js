//使用es6导入语法，导入jquery
import $ from 'jquery'

//导入样式（在webpack中，一切皆模块，都可以通过es6导入语法导入和使用）
import './css/index.css'
import './css/index.less'

import '@/js/test/info.js'

//导入图片，给img标签动态赋值
import logo from './images/logo.png'
$(".box").attr("src", logo);

//2.定义jquery的入口函数
$(function(){
    //3.实现奇偶行变色
    //奇数行为红色
    $('li:odd').css('background-color','yellow');
    $('li:even').css('background-color','gray');
});

//定义装饰器函数
function info(target){
    target.info='Person info.'
}

@info
class Person{}

consle.log(Person.info)