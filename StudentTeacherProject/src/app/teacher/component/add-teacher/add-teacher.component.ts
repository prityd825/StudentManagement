import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css'
})
export class AddTeacherComponent {
  teachers: any[] = [];
  newTeacher: any = {};
  
  addTeacher(form: NgForm) {
    if (form.invalid) {
      return;
    }
  
    console.log('Adding a new teacher:', this.newTeacher);
    alert('Teacher added successfully');
    this.teachers.push(this.newTeacher);

    this.newTeacher = {};
    form.resetForm();
  }
}
