import { Component, OnInit } from "@angular/core";
import { NameService } from "../name.service";

import { TimerService } from "../timer.service";

@Component({
  selector: "app-myc03",
  templateUrl: "./myc03.component.html",
  styleUrls: ["./myc03.component.css"],
  providers: [TimerService]
})
export class Myc03Component implements OnInit {
  ns: NameService;

  names = [];

  // 官方提供了简单的写法, 能够快速完成3个步骤
  // private ts: TimerService 此写法会自动完成:
  // 1. ts:TimerService 的声明
  // 2. 构造中的依赖写法
  // 3. this.ts = ts
  constructor(ns: NameService, private ts: TimerService) {
    this.ns = ns;
  }

  ngOnInit() {
    this.names = this.ns.getNames();

    this.ts.start();
    console.log("myc03定时器启动");

    setTimeout(() => {
      this.ts.end();
      console.log("myc03定时器关闭!");
    }, 3000);
  }
}
