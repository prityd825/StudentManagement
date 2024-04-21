import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrl: './teacher-home.component.css'
})
export class TeacherHomeComponent {
  selectedTeacher: any;
  teachers: any[] = [];
  displayedColumns: string[] = ['teacherId', 'teacherName', 'department', 'actions'];

  constructor(private router: Router) { }
  
  ngOnInit(): void {
    this.teachers = [
      { id: 1, name: 'Teacher 1', department: 'Mathematics' },
      { id: 2, name: 'Teacher 2', department: 'Science' },
    ];
  }

  
  goAddTeacher() {
    this.router.navigate(['/add-teacher']);
  }


  goDetailsTeacher(teacher: any) {
    console.log('Details for teacher:', teacher);
    this.router.navigate(['/show-teacher']);
  }

  goEditTeacher(teacher: any) {
    console.log('Edit teacher:', teacher);
    this.router.navigate(['/edit-teacher']);
  }
  goDeleteTeacher(teacher: any) {
    console.log('Delete teacher:', teacher);
    this.router.navigate(['/delete-teacher']);
  }

  selectTeacher(teacher: any) {
    this.selectedTeacher = teacher;
  }
 
}
