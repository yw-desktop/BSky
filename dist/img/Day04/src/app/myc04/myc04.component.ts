import { Component, OnInit } from "@angular/core";
// 引入网络服务模块
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-myc04",
  templateUrl: "./myc04.component.html",
  styleUrls: ["./myc04.component.css"]
})
export class Myc04Component implements OnInit {
  data = {};

  // 网络服务模块 已经注入过了, 通过依赖的方式引入到项目中即可
  constructor(private http: HttpClient) {
    //参数是固定的写法, 会自动 this.http = http
    //所以类中会多出一个成员属性 http
  }

  ngOnInit() {
    // 发送get请求
    let url = "http://101.96.128.94:9999/data/product/list.php?pno=2";
    // axios.get(url).then(res=>{}).then(...)

    //subscribe:订阅, 订阅请求成功后的回调
    this.http.get(url).subscribe(res => {
      console.log(res);
      this.data = res;
    });
  }
}
