import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LessonsComponent } from './lessons/lessons.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentImgComponent } from './student-img/student-img.component';
import { VerticalTimelineModule } from 'angular-vertical-timeline';
import { MytimelineComponent } from './mytimeline/mytimeline.component';
@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent,
    StudentImgComponent,
    MytimelineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    VerticalTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
