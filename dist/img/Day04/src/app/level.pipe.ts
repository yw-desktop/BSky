import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "level"
})
export class LevelPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value == 1) {
      return "高级";
    } else if (value == 2) {
      return "初级";
    } else if (value == 3) {
      return "超级";
    } else {
      return "未知等级";
    }
  }
}
