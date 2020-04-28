import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Myc01Component } from "./myc01/myc01.component";
import { LevelPipe } from "./level.pipe";
import { Myc02Component } from "./myc02/myc02.component";
import { Myc03Component } from "./myc03/myc03.component";

// 网络模块
import { HttpClientModule } from "@angular/common/http";
import { Myc04Component } from './myc04/myc04.component';
import { Myc05Component } from './myc05/myc05.component';
import { Myc06Component } from './myc06/myc06.component';
import { Myc07Component } from './myc07/myc07.component';

// 6版本之前
// import { TimerService } from "./timer.service";

@NgModule({
  declarations: [
    AppComponent,
    Myc01Component,
    LevelPipe,
    Myc02Component,
    Myc03Component,
    Myc04Component,
    Myc05Component,
    Myc06Component,
    Myc07Component
  ],
  imports: [BrowserModule, HttpClientModule],
  // providers: [TimerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
