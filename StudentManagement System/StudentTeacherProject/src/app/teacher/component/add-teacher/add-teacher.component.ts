import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Teacher } from '../../teacher.model';
import { AddTeacherService } from '../../services/addTeacher/add-teacher.service';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css'
})
export class AddTeacherComponent {
  newTeacher: Teacher = { id: 0, name: "", department:""};
  constructor(private addTeacherService: AddTeacherService,
    private toastr: ToastrService,
  ){}
  
  addTeacher(form: NgForm) {
    if (form.invalid) {
      //alert("Please Fill all required Field");
      this.toastr.error("Please fill all required fields");
      return;
    }
    console.log(this.newTeacher);
    this.addTeacherService.addTeacher(this.newTeacher)
    .subscribe((Teacher: Teacher) => {
      console.log('Adding a new teacher:',Teacher);
      this.toastr.success('Teacher added successfully');
      //alert('Teacher added successfully');
      form.resetForm();
    }, (error: any) => {
      console.error('Error adding teacher',error);
      this.toastr.error('Failed to add teacher');
    }

  );

  }
  
  }

