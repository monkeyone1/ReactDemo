import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

// import './main.css';
// let  num= '知道了';
// let ccc=<div>{2+52}</div>;
// let hello =() => {
//   return <p>Hello</p>
// }
 //创建组件
// var  Dom =React.createClass({
// //第一种(过时)
//   render:function() {
//     return(<div>aaaaaa</div> )
//   }
// })

//第二种  //组件名 必须大写 否者会当做 原生的html来渲染 (比较常用)
// function Dom () {
//   return(
//     <div>hello </div>
//   )
// }

//在概念中js

let hello ={color:'red'};
ReactDOM.render(
  <div style={hello}>
   <Header/>
   <Main/>
   <Footer/>
  </div>,
  document.getElementById('root')
);



//jsx 语法特点
//在jsx可以嵌入变量和表达式,注意在jsx变量中需要{}来包裹
// 每个标签必须关闭
//每个react节点必须包裹在一个闭合标签内
//render 中  注释必须用{}包裹起来 {/* 我是注释 */}
//class 要写成 className for 要改写成HTMlfor


