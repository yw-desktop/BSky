// src/ts/test1.ts
// typescript最明显的特征: 可以书写变量类型, 是类型严格的语言
// 当指定了变量类型的 好处:
// * 编译器可以猜测提示出对应的成员方法!
class Emp {
  // name:字符串类型
  name: string = "20"; //注意大小写

  age: number = 20; //数字

  isMarried: boolean = true; //布尔类型

  boss: object = {}; //对象类型

  //数组类型: 设定数组中值的类型
  // 代表数组中存放的都是字符串
  names: Array<string> = ["mike", "lucy"];

  // 另一种数组类型的设定方式 :
  // []代表数组  number代表数组中的值是数字
  nums: number[] = [1, 3, 5, 6];

  // 数组 内容是字符串
  emps: string[] = [""];

  // 任意类型: any
  serverData: any = 10;

  //制作一个函数 计算两个数字之和
  // 可以限定返回值的类型   函数名():返回值类型{}
  add(n1: number, n2: number): number {
    return n1 + n2;
    // return "123123";
  }

  show() {
    // *赋值为不同类型时, 编译器会报错. 可以避免很多错误!
    // this.name = 20;
    // 有丰富的代码提示!
    // this.name.
    // this.names[0].
  }
}

let e = new Emp();
// 类型严格的好处: 编译器可以在代码书写环节 就预判出很多错误, 减少bug的出现!
// e.add("123", true);

/**
 * 既然ts语言写完的代码执行时 会先转js 再执行,
 * 那为什么不直接写js呢???
 *
 * ts语言在书写时 类型严格, 可以避免很多错误 另外具有大量代码提示
 * 对于程序员书写环节很友好!
 *
 */
