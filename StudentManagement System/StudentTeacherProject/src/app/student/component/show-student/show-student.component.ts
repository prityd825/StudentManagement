import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../student.model';
import { ShowStudentService } from '../../services/showStudent/show-student.service';
import { ToastrService } from 'ngx-toastr';

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
    private showStudentService: ShowStudentService,
    private toastr: ToastrService,
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
          this.toastr.success("Successfully found the student");
          console.log("successful!");
          this.student = student;
        },
        (error: any) => {
          //alert("Enter a valid student found!");
          this.toastr.error('Failed to fetch student information');
          console.error('Error fetching student information:', error);
          this.student = { id: 0, name: "", department: "", teacherId: 0, teacherName: "" };
        }
      );
  }
}
