import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrl: './student-home.component.css',
  
})
export class StudentHomeComponent {
  students: any[] = [];
  selectedStudent: any;
  displayedColumns: string[] = ['studentId', 'studentName', 'department', 'teacherId', 'teacherName', 'actions'];
  showAddForm: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.students = [
      { id: 1, name: 'Bornita', department: 'Computer Science', teacherId: 101, teacherName: 'Mr. Adittya' },
      { id: 2, name: 'Prity', department: 'Software Engineering', teacherId: 103, teacherName: 'Mr. Adittya' },
    ];
  }

  goAddStudent() {
    this.router.navigate(['/add-student']);
  
  }

  goEditStudent(student:any) {
    this.router.navigate(['/edit-student'],{ state: { student: student } });
  }

  goDeleteStudent(student:any) {
    this.router.navigate(['/delete-student']);
 
  }

  goDetailsStudent(student: any) {
    this.router.navigate(['/show-student']);
   
  }
  
  selectStudent(student: any) {
    this.selectedStudent = student;
  }
}

