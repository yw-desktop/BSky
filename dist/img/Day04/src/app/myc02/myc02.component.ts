import { Component, OnInit } from "@angular/core";
import { NameService } from "../name.service";

// 引入时间服务
import { TimerService } from "../timer.service";

@Component({
  selector: "app-myc02",
  templateUrl: "./myc02.component.html",
  styleUrls: ["./myc02.component.css"],
  // 当前组件的支援服务有 TimerService, 此服务交由当前组件自己来管理
  providers: [TimerService]
})
export class Myc02Component implements OnInit {
  ns: NameService;
  ts: TimerService;

  names = [];

  // 声明依赖: 代表构造需要一个 名字服务
  constructor(ns: NameService, ts: TimerService) {
    this.ns = ns;
    this.ts = ts;
  }

  doDel(i) {
    this.names.splice(i, 1);
  }

  ngOnInit() {
    this.names = this.ns.getNames();

    // 启动定时器
    this.ts.start();
    console.log("myc02启动 5秒定时器");

    //5秒之后关闭
    setTimeout(() => {
      this.ts.end();
      console.log("myc02关闭定时器");
    }, 5000);
  }
}
