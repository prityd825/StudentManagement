import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './component/add-student/add-student.component';
import { EditStudentComponent } from './component/edit-student/edit-student.component';
import { DeleteStudentComponent } from './component/delete-student/delete-student.component';
import { ShowStudentComponent } from './component/show-student/show-student.component';
import { StudentHomeComponent } from './component/student-home/student-home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddStudentComponent,
    EditStudentComponent,
    DeleteStudentComponent,
    ShowStudentComponent,
    StudentHomeComponent,

  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
   
  ]
})
export class StudentModule { }
