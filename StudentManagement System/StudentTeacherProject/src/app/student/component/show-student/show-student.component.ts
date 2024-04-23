import { Component ,OnInit} from '@angular/core';
import { Student } from '../../student.model';
import { ShowStudentService } from '../../services/showStudent/show-student.service';


@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrl: './show-student.component.css'
})
export class ShowStudentComponent{
  studentId: number = 0;
  student: Student = {id: 0,name: "", department:"", teacherId: 0, teacherName:""};
  constructor(private showStudentService: ShowStudentService) {}
  getStudentInfo(){
    this.showStudentService.showStudentById(this.studentId)
    .subscribe(
      (student: Student) => {
        console.log("successful!");
        this.student = student;
      },
      (error: any) => {
        alert("Student id not found!");
        console.error('Error fetching student information:', error);
        this.student = {  id: 0 ,name: "", department: "", teacherId: 0, teacherName:"" }; 
      }
    );
  }
}