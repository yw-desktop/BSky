// src/ts/test1.ts
// typescript最明显的特征: 可以书写变量类型, 是类型严格的语言
// 当指定了变量类型的 好处:
// * 编译器可以猜测提示出对应的成员方法!
var Emp = /** @class */ (function () {
    function Emp() {
        // name:字符串类型
        this.name = "20"; //注意大小写
        this.age = 20; //数字
        this.isMarried = true; //布尔类型
        this.boss = {}; //对象类型
        //数组类型: 设定数组中值的类型
        // 代表数组中存放的都是字符串
        this.names = ["mike", "lucy"];
        // 另一种数组类型的设定方式 :
        // []代表数组  number代表数组中的值是数字
        this.nums = [1, 3, 5, 6];
        // 数组 内容是字符串
        this.emps = [""];
        // 任意类型: any
        this.serverData = 10;
    }
    //制作一个函数 计算两个数字之和
    // 可以限定返回值的类型   函数名():返回值类型{}
    Emp.prototype.add = function (n1, n2) {
        return n1 + n2;
        // return "123123";
    };
    Emp.prototype.show = function () {
        // *赋值为不同类型时, 编译器会报错. 可以避免很多错误!
        // this.name = 20;
        // 有丰富的代码提示!
        // this.name.
        // this.names[0].
    };
    return Emp;
}());
var e = new Emp();
// 类型严格的好处: 编译器可以在代码书写环节 就预判出很多错误, 减少bug的出现!
// e.add("123", true);
