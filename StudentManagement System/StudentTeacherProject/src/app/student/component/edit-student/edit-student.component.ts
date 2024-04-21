import { Component,Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent {
  @Input() student: any;
  editedStudent: any = {};

  ngOnChanges() {
    this.student = history.state.student;
  }

  updateStudent(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log('Updating student:', this.student);
    alert('Student updated successfully');
  }

}
