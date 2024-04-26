import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EditStudentService } from '../../services/editStudent/edit-student.service';
import { Student } from '../../student.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  @Input() student!: Student;
  editedStudent: Student = {
    id: 0,
    name: '',
    department: '',
    teacherId: 0,
    teacherName:'',
  };

  constructor(
    private route: ActivatedRoute,
    private editStudentService: EditStudentService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const studentId = +params['id'];
      if (studentId) {
        this.getStudentById(studentId);
      } else {
        console.error('Invalid student ID provided.');
      }
    });
  }

  getStudentById(studentId: number): void {
    this.editStudentService.getStudentById(studentId)
      .subscribe(
        (student: Student) => {
          this.editedStudent = student;
        },
        (error: HttpErrorResponse) => {
          console.error('Error fetching student information:', error);
          alert('Failed to fetch student information');
        }
      );
  }

  updateStudent(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const updateStudentCommand = {
      id: this.editedStudent.id,
      name: this.editedStudent.name,
      department: this.editedStudent.department,
      teacherName: this.editedStudent.teacherName,
    };

    this.editStudentService.updateStudentById(this.editedStudent.id, updateStudentCommand)
      .subscribe(
        (updatedStudent: Student) => {
          console.log('Updated Student:', updatedStudent);
          alert('Student Info updated successfully');
        },
        (error: HttpErrorResponse) => {
          if (error.error && error.error.title) {
            console.error('Failed to update Student:', error.error.title);
            alert('Failed to update Student: ' + error.error.title);
          } else {
            console.error('Failed to update Student:', error.message);
            alert('Failed to update Student. You provided wrong Id');
          }
        }
      );
  }
}
