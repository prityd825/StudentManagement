import { Component, Input, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EditStudentService } from '../../services/editStudent/edit-student.service';
import { Student } from '../../student.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnChanges {
  @Input() student!: Student;
  editedStudent: Student = {
    id: 0,
    name: '',
    department: '',
    teacherId: 0,
    teacherName:'',
  };

  constructor(private editStudentService: EditStudentService) {}
  ngOnChanges() {
    if (this.student && this.student.id !== undefined) {
      this.editedStudent = { ...this.student };
    }
  }

  updateStudent(form: NgForm) {
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
      .subscribe(updatedStudent => {
        console.log('Updated Student:', updatedStudent);
        alert('Student Info updated successfully');
      }, (error: HttpErrorResponse) => {
        if (error.error && error.error.title) {
          console.error('Failed to update Student:', error.error.title);
          alert('Failed to update Student: ' + error.error.title);
        } else {
          console.error('Failed to update Student:', error.message);
          alert('Failed to update Student. You provided wrong Id');
        }
      });
  }
}
