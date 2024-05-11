import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentHomeComponent } from './student/component/student-home/student-home.component';
import { TeacherHomeComponent } from './teacher/component/teacher-home/teacher-home.component';
import { AddStudentComponent } from './student/component/add-student/add-student.component';
import { AddTeacherComponent } from './teacher/component/add-teacher/add-teacher.component';
import { ShowTeacherComponent } from './teacher/component/show-teacher/show-teacher.component';
import { EditTeacherComponent } from './teacher/component/edit-teacher/edit-teacher.component';
import { DeleteTeacherComponent } from './teacher/component/delete-teacher/delete-teacher.component';
import { EditStudentComponent } from './student/component/edit-student/edit-student.component';
import { ShowStudentComponent } from './student/component/show-student/show-student.component';
import { DeleteStudentComponent } from './student/component/delete-student/delete-student.component';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
import { HomeModule } from './home/home.module';
import { HomePageComponent } from './home/component/home-page/home-page.component';



const routes: Routes = [
  {path:'student/component/student-home', component:StudentHomeComponent},
  {path: 'add-student', component: AddStudentComponent },
  {path:'edit-student',component:EditStudentComponent},
  {path:'show-student',component:ShowStudentComponent},
  {path:'delete-student',component:DeleteStudentComponent},
  {path:'teacher/component/teacher-home', component:TeacherHomeComponent},
  {path:'add-teacher',component:AddTeacherComponent},
  {path:'show-teacher',component:ShowTeacherComponent},
  {path:'edit-teacher',component:EditTeacherComponent},
  {path:'delete-teacher',component:DeleteTeacherComponent},
  {path: 'show-student/:id', component: ShowStudentComponent },
  {path: 'edit-student/:id', component: EditStudentComponent},
  {path: 'delete-student/:id', component: DeleteStudentComponent},
  {path:'show-teacher/:id', component: ShowTeacherComponent},
  {path: 'edit-teacher/:id', component: EditTeacherComponent},
  {path:'delete-teacher/:id', component: DeleteTeacherComponent},
  {path : 'home-page', component: HomePageComponent},
];


@NgModule({
  imports: [TeacherModule, StudentModule,HomeModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
