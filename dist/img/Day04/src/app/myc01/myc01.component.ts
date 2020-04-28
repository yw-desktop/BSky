import { Component, OnInit } from "@angular/core";
// 采用 依赖注入方式 使用服务中的数据
import { WebService } from "../web.service";

@Component({
  selector: "app-myc01",
  templateUrl: "./myc01.component.html",
  styleUrls: ["./myc01.component.css"]
})
export class Myc01Component implements OnInit {
  ws: WebService;

  data = [];
  curP = 1; //第一页

  doCheck(i) {
    this.curP = i + 1;
  }

  doPrev() {
    // 上一页
    this.curP--;
  }

  doNext() {
    // 下一页
    this.curP++;
  }

  constructor(ws: WebService) {
    this.ws = ws;
  }

  ngOnInit() {
    // 有的同学运行时可能会报错: Error TypeError: this.ws.getWebs is not a function
    // 重启服务器即可!
    this.data = this.ws.getWebs();
  }
}
