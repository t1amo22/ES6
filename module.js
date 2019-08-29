// 模块加载方案
// CommonJS 服务器/ AMD浏览器 /ES6语言标准的层面
// ES6 模块的设计思想: 静态化
// 编译时就可以确定模块之间的依赖关系


// CommonJS模块（实际上就是一个对象）
let { stat, exists, readFile } = require('fs');

// 运行时加载：运行的时候才能获取到这个对象


// es6模块： 通过export命令显示指定输出的代码，在通过import输入
import { stat, exists, readFile } from 'fs';
// 编译时加载/ 静态加载 （其实就是按需加载）
// 从fs模块加载 3 个方法，其他方法不加载
// import在静态解析阶段执行，所以它是一个模块之中最早执行

// 优点
// 效率高



// 一个模块就是一个独立的文件

// 对外部输出变量。
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;

// OR
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export { firstName, lastName, year };

// 输出函数
export function A() {};
export function B() {};

// OR
function v1() { ... }
function v2() { ... }
  
export {
    v1 as streamV1,
    v2 as streamV2,
    v2 as streamLatestVersion
};

//CommonJS 模块的require命令和 ES6 模块的import命令，可以写在同一个模块里面(babel转码)
// 但是不建议
// 因为import最早执行的
// 有可能得不到预期的结果

// export default 不用阅读文档就能加载模块


export default function () {} //可以是一个匿名函数

// or 也可以其非匿名函数
function foo() {}
export default foo;

export default function foo() {
    console.log('foo');
  }

//   使用export default时，对应的import语句不需要使用大括号
import customName from './export-default';

// 一个模块只能有一个默认输出，因此export default命令只能使用一次

// export 和 export default 可以同时写在一个文件

// 本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。
