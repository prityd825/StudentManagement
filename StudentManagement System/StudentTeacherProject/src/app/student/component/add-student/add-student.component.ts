import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})

export class AddStudentComponent {
  students: any[] = [];
  newStudent: any = {};
  showAddForm: boolean = false;

  addStudent(form: NgForm) {
    if (form.invalid) {
      return;
    }
  
    console.log('Adding a new student:', this.newStudent);
    alert('Student added successfully');
    this.students.push(this.newStudent);

    this.newStudent = {};
    form.resetForm();

  
  }
}
