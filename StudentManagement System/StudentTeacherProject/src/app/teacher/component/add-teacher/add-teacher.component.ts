
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Teacher } from '../../teacher.model';
import { AddTeacherService } from '../../services/addTeacher/add-teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css'
})
export class AddTeacherComponent {
  newTeacher: Teacher = { id: 0, name: "", department:""};
  constructor(private addTeacherService: AddTeacherService){}
  
  addTeacher(form: NgForm) {
    if (form.invalid) {
      alert("Please Fill all required Field");
      return;
    }
    console.log(this.newTeacher);
    this.addTeacherService.addTeacher(this.newTeacher)
    .subscribe((Teacher: Teacher) => {
      console.log('Adding a new teacher:',Teacher);
      alert('Teacher added successfully');
      form.resetForm();
    }, (error: any) => {
      console.error('Error adding teacher',error);
    }

  );

  }
  
  }

