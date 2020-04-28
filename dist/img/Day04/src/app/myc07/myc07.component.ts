import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-myc07",
  templateUrl: "./myc07.component.html",
  styleUrls: ["./myc07.component.css"]
})
export class Myc07Component implements OnInit {
  timer = "";

  // 构造
  constructor() {
    console.log("constructor: 构造");
  }

  // 组件初始化完成,即将挂载 DOM 树
  ngOnInit() {
    setInterval(() => {
      this.timer = new Date().toLocaleTimeString();
    }, 1000);

    console.log("ngOnInit: 组件初始化完成,即将挂载 DOM 树");
  }

  ngOnChanges(): void {
    console.log("ngOnChanges: 组件的自定义属性发生改变");
  }

  ngDoCheck(): void {
    console.log(
      "ngDoCheck: 组件发生了自己无法控制的变化, 例如浏览器变化导致的组件变化"
    );
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked: 组件内容发生改变");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit: 组件内容初始化完成");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit: 组件视图初始化完成");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked:组件视图发生改变");
  }

  //组件销毁时
  ngOnDestroy(): void {
    console.log("ngOnDestroy: 组件即将销毁");
  }
}
