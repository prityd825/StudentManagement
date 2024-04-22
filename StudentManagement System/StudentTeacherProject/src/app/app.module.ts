import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudentModule } from './student/student.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherModule } from './teacher/teacher.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    TeacherModule,
    FormsModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
