import { Injectable } from "@angular/core";

// 删除默认生成的 注入 根组件的操作!
@Injectable()
export class TimerService {
  // 定时器开始时间
  startTime: number = 0; //ts语法: 代表变量是数字类型
  // 定时器结束时间
  endTime: number = 0;

  constructor() {
    // clg   快速出现打印
    console.log("一个定时器对象被创建了!");
  }

  start() {
    this.startTime = new Date().getTime();
  }

  end() {
    this.endTime = new Date().getTime();

    console.log("耗时:", this.endTime - this.startTime);
  }
}
