import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Student } from '../../student.model';
import { DeleteStudentService } from '../../services/deleteStudent/delete-student.service';
import { ShowStudentService } from '../../services/showStudent/show-student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {
  studentId: number = 0;
  student: Student = { id: 0, name: "", department: "", teacherId: 0, teacherName: "" };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private deleteStudentService: DeleteStudentService,
    private showStudentService: ShowStudentService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const studentId = +params['id'];
      if (studentId) {
        this.studentId = studentId;
        this.getStudentById(studentId);
      } else {
        console.error('Invalid student ID provided.');
      }
    });
  }

  getStudentById(studentId: number): void {
    this.showStudentService.showStudentById(studentId)
      .subscribe(
        (student: Student) => {
          console.log("successful!");
          this.student = student;
        },
        (error: any) => {
          alert("Student id not found!");
          console.error('Error fetching student information:', error);
          this.student = { id: 0, name: "", department: "", teacherId: 0, teacherName: "" };
        }
      );
  }

  cancelDelete() {
    alert('Deletion cancelled.');
    this.router.navigate(['/student', 'component', 'student-home']);
  }

  confirmDelete() {
    if (this.student) {
      this.deleteStudentService.deleteStudent(this.student.id).subscribe(
        () => {
          alert('Student deleted successfully.');
          this.router.navigate(['/student', 'component', 'student-home']);
        },
        (error: any) => {
          console.error('Error deleting student:', error);
          alert('An error occurred while deleting the student.');
        }
      );
    } else {
      alert('No student selected.');
    }
  }
}
