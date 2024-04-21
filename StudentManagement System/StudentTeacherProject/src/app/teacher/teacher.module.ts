import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTeacherComponent } from './component/add-teacher/add-teacher.component';
import { EditTeacherComponent } from './component/edit-teacher/edit-teacher.component';
import { DeleteTeacherComponent } from './component/delete-teacher/delete-teacher.component';
import { ShowTeacherComponent } from './component/show-teacher/show-teacher.component';
import { TeacherHomeComponent } from './component/teacher-home/teacher-home.component';
import { MatTableModule } from '@angular/material/table'; 
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddTeacherComponent,
    EditTeacherComponent,
    DeleteTeacherComponent,
    ShowTeacherComponent,
    TeacherHomeComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class TeacherModule { }