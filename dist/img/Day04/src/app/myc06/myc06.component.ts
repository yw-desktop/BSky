import { Component, OnInit } from "@angular/core";

import { ProductService } from "../product.service";

@Component({
  selector: "app-myc06",
  templateUrl: "./myc06.component.html",
  styleUrls: ["./myc06.component.css"]
})
export class Myc06Component implements OnInit {
  constructor(private ps: ProductService) {}

  data = {}; //存放请求下来的数据

  detail = {};

  ngOnInit() {
    // res参数 来自于 getProducts() 中的回调
    this.ps.getProducts(res => {
      this.data = res;
    });

    this.ps.getDetail(res => {
      this.detail = res;
    });
  }
}
