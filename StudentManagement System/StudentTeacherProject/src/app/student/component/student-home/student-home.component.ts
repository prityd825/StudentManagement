import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../student.model';
import { StudentHomeService } from '../../services/studentHome/student-home.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

   
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  students: MatTableDataSource<Student> = new MatTableDataSource<Student>();
  //students: Student[] = [];
  selectedStudent: Student | null = null;
  displayedColumns: string[] = ['studentId', 'studentName', 'department', 'teacherId', 'teacherName', 'actions'];
  showAddForm: boolean = false;

  constructor(private router: Router, private studentHomeService: StudentHomeService) { }

  ngOnInit(): void {
    this.fetchStudents();
  }
  
  fetchStudents() {
    /*this.studentHomeService.getStudents().subscribe(
      (students: Student[]) => {
        this.students = students; 
      },
      (error: any) => {
        console.error('Error fetching students:', error);
      }
    );
  }*/
  this.studentHomeService.getStudents().subscribe(
    (students: Student[]) => {
      this.students = new MatTableDataSource<Student>(students);
      this.students.paginator = this.paginator;
    },
    (error: any) => {
      console.error('Error fetching students:', error);
    }
  );
}

  goAddStudent() {
    this.router.navigate(['/add-student']);
  }

  goEditStudent()
  {
    this.router.navigate(['/edit-student']);
  }

  goEditSelectedStudent(student: Student) {
    this.router.navigate(['/edit-student', student.id]);
  }

  goDeleteStudent(){
    this.router.navigate(['/delete-student']);
  }

  goDeleteSelectedStudent(student: Student) {
    this.router.navigate(['/delete-student', student.id]);
  }

  goDetailsStudent(){
    this.router.navigate(['/show-student']);
  }

  goDetailsSelectedStudent(student: Student) {
    this.router.navigate(['/show-student', student.id]);
  }
}
