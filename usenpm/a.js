// 模块分类
// 1.nodejs 自带的核心 api
// 2.通过 npm 安装的模块，安装到了项目文件夹下的 node_modules 下
// 3.我们自己写的 js 文件

// 1.
// var http = require('http');
// console.log(http);

// 2.
// var $ = require('jquery');
// console.log($);

// 3.
// var num = require('./b.js');

// npm init 初始化node项目，生成package.json，记录项目的一些描述及依赖
// npm install [包名] --save || --save-dev || -g
  // --save 将包名记录到了 dependencies 字段下，通常我们项目上线之后仍然依赖的就 --save
  // --save-dev 可以缩写为 -D 将包名记录到了 devDependencies 字段下，通常我们项目开发时候依赖的上线不需要它的代码，比如一些打包工具
  // -g 将模块安装到我们的用户主目录下，通长安装的是一些需要它的脚本命令的，可以在任何地方使用它

// npm install 可以安装项目内package.json中记录的依赖

// npm uninstall [包名] [-g]  卸载模块，注意需要手动删除 package.json 的记录
