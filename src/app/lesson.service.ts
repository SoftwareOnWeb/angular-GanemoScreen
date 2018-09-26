import { Injectable } from '@angular/core';
import { Lesson } from './lesson';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student';
@Injectable({
  providedIn: 'root'
})
export class LessonService {
/*
  datetime = new Date();
  time = this.datetime.getHours() + ':' + this.datetime.getMinutes();
  lessons: Lesson[] =
    [{
      id: 1,
      dateTime: this.time,
      time: '4:50 PM',
      duration: 60,
      type: 'Drum',
      note: 'A note about what students need to work on this lesson'
    },
    {
      id: 1,
      dateTime: this.time,
      time: '4:50 PM',
      duration: 40,
      type: 'Gitar',
      note: 'A note about what students need to work on this lesson'
    },
    {
      id: 1,
      dateTime: this.time,
      time: '4:50 PM',
      duration: 30,
      type: 'piano',
      note: 'A note about what students need to work on this lesson'
    }
    ];
    */
  private lessonsUrl = 'http://localhost:50740/api/Lessons';
  private StudentsUrl = 'http://localhost:50740/api/Students';
  constructor(private http: HttpClient) { }
  getLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.lessonsUrl);
    // return of(this.lessons);
  }
  getStudents():  Observable<Student[]> {
    return this.http.get<Student[]>(this.StudentsUrl);
    // return of(this.lessons);
  }
}
