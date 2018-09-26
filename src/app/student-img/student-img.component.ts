import { Component, OnInit } from '@angular/core';
import { LessonService } from '../lesson.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-img',
  templateUrl: './student-img.component.html',
  styleUrls: ['./student-img.component.css']
})
export class StudentImgComponent implements OnInit {

  students: Student[];
  constructor(private lessonService: LessonService) { }

  ngOnInit() {
    this.getStudents();
  }
  getStudents(): void {
    this.lessonService.getStudents().subscribe(s => this.students = s);
  }

}
