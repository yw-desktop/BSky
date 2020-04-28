//test3.ts

//访问控制词:
//控制类中的属性 在不同情况下被访问的 通过性!

//对于类来说, 会有3个不同的方式进行调用读取其内容:
// 类自身, 类外, 子类

// 例如:  憨豆豆自己, 憨豆豆的同桌, 憨豆豆的儿子  对于憨豆豆
// 例如: 憨豆豆有属性 钱包 : 保护状态(自己能用, 儿子能用, 外人不行)
// 憨豆豆的老婆: 憨豆豆自己有, 外人 和 儿子没有 ---  私有
// 憨豆豆的名字: 大家都可以叫 -- 公开的

class HanDouDou {
  public name = "憨豆豆"; //public 公开的
  protected money = "钱"; //protected 保护的
  private wife = "豆憨憨"; //private 私有的

  //默认方法是public的
  public show() {
    //类中
    this.money;
    this.name;
    this.wife;
  }

  protected talk() {}
  private say() {}
}

let hdd = new HanDouDou();
hdd.name;
// hdd.money;
// hdd.wife;

// 子类 继承 父类
class HanSon extends HanDouDou {
  demo() {
    this.name;
    this.money;
    // this.wife;
  }
}
