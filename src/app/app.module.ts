import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LessonsComponent } from './lessons/lessons.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentImgComponent } from './student-img/student-img.component';
@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent,
    StudentImgComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
