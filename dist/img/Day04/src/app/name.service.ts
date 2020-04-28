import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class NameService {
  names = ["亮亮", "涛哥", "燕子", "Booming"];

  constructor() {}

  getNames() {
    return this.names;
  }
}
