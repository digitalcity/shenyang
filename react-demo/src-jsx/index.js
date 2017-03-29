import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

ReactDOM.render(
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
  ,document.getElementById('root'));

  // let num = 11;
  // let obj = {
  //   name: 'aaa',
  //   age: 444
  // }
  // function sum(x,y) {
  //   return x*y
  // }
  // let aaa = <div>
  //   <p className='active' id='test'>afdasfds</p>
  //   <span>afdafds</span>
  //   <label htmlFor="name">姓名</label>
  //   <input type="text" id='name' />
  //   {/* 我是注释 */}
  // </div>;

// 概念，在js中直接写形如 xml 格式的语法
// const element = <h1>Hello, world!</h1>;
// This funny tag syntax is neither a string nor HTML.
// It is called JSX, and it is a syntax extension to JavaScript.

// jsx语法特点
// 在jsx中可以嵌入变量或求值表达式,注意在jsx语法中写js变量需要用{}包裹
// 每一个标签必须关闭
// 每一个jsx节点必须包裹在一个闭合标签内
// 在jsx中注释的写法 {/* 我是注释 */}
// class 要写成 className ,for 改写为 htmlFor

// React 组件，三种组件创建方式。首字母必须大写，否则回当做原生的html标签去渲染
// 一个组件就是一块dom结构，用的时候形如自定义标签
// 第一种（过时）
// React.createClass({
//   render: function () {
//     return(
//       <div>afdasfds</div>
//     )
//   }
// })
// 第二种 function,用的不太多，通常不需要组件的state，生命周期函数时用
// 第三种 class 用的最多,
/*
class Main extends React.Component {
  render(){
    return(
      <div>
        123
      </div>
    )
  }
}
*/

// less sass浏览器不支持所以需要编译
// 在webpack这里很好处理这些文件
