import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getDetail(action) {
    let url = "http://101.96.128.94:9999/data/product/details.php?lid=5";

    this.http.get(url).subscribe(res => {
      console.log(res);
      action(res);
    });
  }

  // action = (res)=>{this.data = res}
  // 从组件中传入的箭头函数: 箭头函数中的this代表声明时所在的对象
  getProducts(action) {
    let url = "http://101.96.128.94:9999/data/product/list.php?pno=2";

    //网络请求: 属于异步操作
    //类似于: 憨豆豆去楼下买手抓饼, 需要做5分钟...
    // 手抓饼做好以后 通知他就可以了
    this.http.get(url).subscribe(res => {
      console.log(res);
      // 请求是异步操作:  myc06应该提供一个联系方式, 请求结束之后通过指定的联系方式来联系myc06. 并传递结果

      //收到结果之后, 调用 my06 组件传入的函数, 通知my06 结果
      action(res);
    });
  }
}
