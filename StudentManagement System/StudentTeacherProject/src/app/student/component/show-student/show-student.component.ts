import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../student.model';
import { ShowStudentService } from '../../services/showStudent/show-student.service';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {
  studentId: number = 0;
  student: Student = { id: 0, name: "", department: "", teacherId: 0, teacherName: "" };

  constructor(
    private route: ActivatedRoute,
    private showStudentService: ShowStudentService
  ) {} 

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const studentId = +params['id'];
      if (studentId) {
        this.studentId = studentId;
        this.getStudentInfo(); 
      } else {
        console.error('Invalid student ID provided.');
      }
    });
  }
  
  getStudentInfo() { 
    this.showStudentService.showStudentById(this.studentId)
      .subscribe(
        (student: Student) => {
          console.log("successful!");
          this.student = student;
        },
        (error: any) => {
          alert("Enter a valid student found!");
          console.error('Error fetching student information:', error);
          this.student = { id: 0, name: "", department: "", teacherId: 0, teacherName: "" };
        }
      );
  }
}
