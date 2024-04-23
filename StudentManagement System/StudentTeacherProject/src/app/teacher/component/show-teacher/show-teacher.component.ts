import { Component } from '@angular/core';
import { Teacher } from '../../teacher.model';
import { ShowTeacherService } from '../../services/showTeacher/show-teacher.service';

@Component({
  selector: 'app-show-teacher',
  templateUrl: './show-teacher.component.html',
  styleUrl: './show-teacher.component.css'
})
export class ShowTeacherComponent {

  studentsUnderTeacher: any[] = [];
  teacherId: number = 0;
  teacher: Teacher = {  id: 0, name: "", department: "" };
  constructor(private showTeacherService: ShowTeacherService) {}

  getTeacherInfo(){
    this.showTeacherService.showTeacherById(this.teacherId)
    .subscribe(
      (teacher: Teacher) => {
        console.log("Successful");
        this.teacher = teacher;
      },
      (error: any) => {
        alert("Teacher is not found");
        console.error('Error fetching teachers information',error);
        this.teacher = {  id: 0, name: "", department: "" }; 
      }
    );
  }
}
