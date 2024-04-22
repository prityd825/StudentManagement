import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
import { environment } from '../../../../environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'] 
})

export class AddStudentComponent {
  students: any[] = [];
  newStudent: any = {
  id: '',
  name:'',
  department: '',
  teacherId: '',
  teacherName: ''
  };
  showAddForm: boolean = true;
  
  constructor(private http: HttpClient) {} 
  private subscription: Subscription | undefined;

  addStudent(form: NgForm) {
    if (form.invalid) {
      alert("This field is required");
      return;
    }
  
    this.http.post(`${environment.domain}/Students`, this.newStudent)
    .subscribe(
      (response: any) => {
        console.log('Response:', response);
        //alert('Student added successfully');
        this.students.push(this.newStudent);
        this.newStudent = {};
        form.resetForm();
      },
      (error: any) => {
        console.error('Error:', error);
        alert('Failed to add student');
      }
    );
  }
  
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
