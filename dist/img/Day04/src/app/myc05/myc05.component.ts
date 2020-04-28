import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-myc05",
  templateUrl: "./myc05.component.html",
  styleUrls: ["./myc05.component.css"]
})
export class Myc05Component implements OnInit {
  data = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    let url = "http://101.96.128.94:9999/data/product/details.php?lid=5";

    this.http.get(url).subscribe(res => {
      console.log(res);
      this.data = res;
    });
  }
}
