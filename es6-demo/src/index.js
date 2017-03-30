// let news =[
//   {title:'今天天气真好', author:'zzd'},
//   {title:'今天天气真好', author:'zzd'},
//   {title:'今天天气真好', author:'zzd'}];

// let newList =news.map(item=>item.title);
// console.log(newList);

// // forEach item index array 不会返回新的数组;
// console.log('hello');

//类里面通常只能写一个个方法
//方法和方法之间不能有符号链接
//类里面定义属性要写到constructor方法中,这个方法是类默认带的,他会在实例化它的时候真的懂执行
//

class Peole {
  constructor(name ,age,height) {
    this.name=name;
    this.age=age;
  }
  say(){
    console.log(this.name,this.age,this.height);
  }
}

// let person = new Peole('zzd',23);
// console.log(person.name);
// console.log(person.age);
// person.say();
class zzd extends Peole{
  constructor(name ,age,height){
    super();
    
    this.name=name+1;
    this.age=age; 
    super.say();
    
  }

   run(){
     console.log('run');
   }
}
let preson = new zzd('zzd',23,32);
preson.say();
preson.run();

// node js 导入js方法
// const test = require('./test');
// console.log(test);
// console.log(test.str);
//原生js 导入js方法

//第一种  命名导出
// import { str,sun } from './test.js';
// console.log(str);
// sun()
// 默认导出
import xxx from './test.js';
console.log(xxx);

