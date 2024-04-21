import { Component,Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrl: './edit-teacher.component.css'
})
export class EditTeacherComponent {
  @Input() teacher: any;
  editedTeacher: any = {};
  
  ngOnChanges() {
   
    this.editedTeacher = { ...this.teacher };
  }


  updateTeacher(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log('Updating teacher:', this.teacher);
    alert('Teacher updated successfully');
  }
}
