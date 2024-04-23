import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddStudentService } from '../../services/addStudent/add-student.service';
import { Student } from '../../student.model';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'] 
})

export class AddStudentComponent {
  newStudent: Student = {
    id:0,
  name:'',
  department: '',
  teacherId: 0 ,
  teacherName: '',
  };
  
  constructor(private addStudentService: AddStudentService) {} 


  addStudent(form: NgForm) {
    if (form.invalid) {
      alert("Please Fill all required Field");
      return;
    }
  console.log(this.newStudent);
  this.addStudentService.addStudent(this.newStudent)
    .subscribe(
      (Student: Student) => {
        console.log('Student created successfully: ',Student);
        alert('Student added successfully');
        this.resetForm();
      }, (error: any) => {
        console.error('Error adding student:', error);
      }
    );
  }
  resetForm() {
     this.newStudent = { id: 0,name: "", department: "", teacherId: 0 ,teacherName: "" };
  } 

}
