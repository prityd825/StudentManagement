import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../teacher.model';
import { ShowTeacherService } from '../../services/showTeacher/show-teacher.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-teacher',
  templateUrl: './show-teacher.component.html',
  styleUrl: './show-teacher.component.css'
})
export class ShowTeacherComponent implements OnInit{
  studentsUnderTeacher: any[] = [];
  teacherId: number = 0;
  teacher: Teacher = {  id: 0, name: "", department: "" };
  
  constructor(
    private showTeacherService: ShowTeacherService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const teacherId = +params['id'];
      if (teacherId) {
        this.teacherId = teacherId;
        this.getTeacherInfo(); 
      } else {
        console.error('Invalid Teacher ID provided.');
      }
    });
  }

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
