import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../student.model';
import { StudentHomeService } from '../../services/studentHome/student-home.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {
  students: Student[] = [];
  selectedStudent: Student | null = null;
  displayedColumns: string[] = ['studentId', 'studentName', 'department', 'teacherId', 'teacherName'];
  showAddForm: boolean = false;

  constructor(private router: Router, private studentHomeService: StudentHomeService) { }

  ngOnInit(): void {
    this.fetchStudents();
  }
  
  fetchStudents() {
    this.studentHomeService.getStudents().subscribe(
      (students: Student[]) => {
        this.students = students; 
      },
      (error: any) => {
        console.error('Error fetching students:', error);
      }
    );
  }

  goAddStudent() {
    this.router.navigate(['/add-student']);
  }

  goEditStudent() {
    this.router.navigate(['/edit-student']);
  }

  goDeleteStudent() {
    this.router.navigate(['/delete-student']);
  }

  goDetailsStudent() {
    this.router.navigate(['/show-student']);
  }
}
