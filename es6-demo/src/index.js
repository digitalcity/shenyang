// let申明的变量存在块级作用域 {};不存在变量提升
// const 申明的常量是只读的
//
// function add(x, y) {
//   console.log(x);
//   console.log(y);
//   return x+y
// }

// let add = (x,y) => ({age: x+y});

// let add = (x,y) => {
//   console.log(x);
//   console.log(y);
//   return x+y;
// }
//
// let result = add(5,8)
// console.log(result);

// setTimeout(function () {
//   console.log(1);
// },1000)

// setTimeout( () => {console.log(1)} ,1000)

// 如果是写匿名函数， () => x;

// 只有一个参数，可以省略参数的小括号，如果有多个或者没有参数，都不可以省略小括号
// let add = () => -10;
//
// console.log(add());
// let [name,age]=['newming',111];
// document.body.innerHTML = '<p>姓名：' + name + '年龄：' + age +'</p>';
// document.body.innerHTML = `<p class='active'>姓名：${name}年龄：${age}</p>`;
//
// console.log(`<p>姓名：${name}年龄：${age}</p>`);

// 函数的参数可以绑定默认值
// function say(name='默认的name', age=10) {
//   alert(`姓名是${name},年龄是${age}`);
// }
// say('newming')

// rest
// function restFunc(a, ...argu) {
//   console.log(a)
//   console.log(argu)
// }
// // restFunc(1);
// restFunc(1, 2, 3, '4');

//将所有参数相加的函数
// function add(...x){
//   return x.reduce( (m,n) => m+n );
// }
//传递任意个数的参数
// console.log(add(1,2,3));
// console.log(add(5,5,5,5,5,45465));

// let result = [1,2,3].reduce(function (x,y) {
//   return x*y
// })
// console.log(result);

// 展开操作符
// let arr = [1,2,3];
// let arr1 = [4,5,6];
// arr2 = [1,2,3,4,5,6]

// let arr2 = [...arr,...arr1,88,...arr1];
// console.log(arr2);


// map
// let arr = [7,8,9,10];
//
// let newArr = arr.map(function (item) {
//   console.log(item);
//   return item*2
// })
// console.log(newArr);
//
// let news = [
//   {title: '今天天气号', author: 'newming'},
//   {title: '今天天气号', author: 'newming'},
//   {title: '今天天气号', author: 'newming'}
// ]
//
// let newsList = news.map( item => item.title )
// console.log(newsList);

// forEach
let arr = [5,8,66];
arr.forEach( item => console.log(item) )
