import { Component } from '@angular/core';

@Component({
  selector: 'app-show-teacher',
  templateUrl: './show-teacher.component.html',
  styleUrl: './show-teacher.component.css'
})
export class ShowTeacherComponent {

  studentsUnderTeacher: any[] = [];
teacher: any;

}
