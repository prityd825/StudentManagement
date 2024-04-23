import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from '../../teacher.model';
import { TeacherHomeService } from '../../services/teacherHome/teacher-home.service';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrl: './teacher-home.component.css'
})
export class TeacherHomeComponent {
  teachers: Teacher[] = [];
  selectedStudent: Teacher | null = null;
  displayedColumns: string[] = ['teacherId', 'teacherName', 'department'];
  showAddForm: boolean = false;


  constructor(private router: Router, private teacherHomeService: TeacherHomeService) { }

  ngOnInit(): void {
    this.fetchTeachers();
  }
  
  fetchTeachers() {
    this.teacherHomeService.getTeachers().subscribe(
      (teachers: Teacher[]) => {
        this.teachers = teachers; 
      },
      (error: any) => {
        console.error('Error fetching teachers:', error);
      }
    );
  }

  
  goAddTeacher() {
    this.router.navigate(['/add-teacher']);
  }


  goDetailsTeacher() {

    this.router.navigate(['/show-teacher']);
  }

  goEditTeacher() {
   
    this.router.navigate(['/edit-teacher']);
  }
  goDeleteTeacher() {
    
    this.router.navigate(['/delete-teacher']);
  }

 
 
}
