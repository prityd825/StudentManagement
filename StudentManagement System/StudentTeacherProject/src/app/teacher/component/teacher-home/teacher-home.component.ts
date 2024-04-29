import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from '../../teacher.model';
import { TeacherHomeService } from '../../services/teacherHome/teacher-home.service';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrl: './teacher-home.component.css'
})
export class TeacherHomeComponent {
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  teachers: MatTableDataSource<Teacher> = new MatTableDataSource<Teacher>();
  selectedStudent: Teacher | null = null;
  displayedColumns: string[] = ['teacherId', 'teacherName', 'department','actions'];
  showAddForm: boolean = false;
  


  constructor(private router: Router, 
    private teacherHomeService: TeacherHomeService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.fetchTeachers();
  }
  
  fetchTeachers() {
  this.teacherHomeService.getTeachers().subscribe(
    (teachers: Teacher[]) => {
      this.teachers = new MatTableDataSource<Teacher>(teachers);
      this.teachers.paginator = this.paginator;
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

  goDeleteSelectedTeacher(teacher: Teacher) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '250px';
    dialogConfig.data = { teacher: teacher };
    dialogConfig.panelClass = 'custom-dialog-container';
    const dialogRef: MatDialogRef<DeleteConfirmDialogComponent> = this.dialog.open(DeleteConfirmDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result: any) => { 
      if (result) {
        this.teacherHomeService.deleteTeacher(teacher.id).subscribe(
          () => {
            this.fetchTeachers();
          },
          (error: any) => {
            console.error('Error deleting teacher:', error);
          }
        );
      }
    });
  }


  goDetailsSelectedTeacher(teacher: Teacher) {

     this.router.navigate(['/show-teacher',teacher.id]);

    }

  goEditSelectedTeacher(teacher: Teacher) {

      this.router.navigate(['/edit-teacher', teacher.id]);

    }
}
