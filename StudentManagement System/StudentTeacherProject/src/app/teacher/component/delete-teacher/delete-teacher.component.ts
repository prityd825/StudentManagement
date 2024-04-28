import { Component, OnInit } from '@angular/core';
import { DeleteTeacherService } from '../../services/deleteTeacher/delete-teacher.service';
import { Teacher } from '../../teacher.model';
import { ShowTeacherService } from '../../services/showTeacher/show-teacher.service';
import { ActivatedRoute, Router } from '@angular/router'; 
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-delete-teacher',
  templateUrl: './delete-teacher.component.html',
  styleUrl: './delete-teacher.component.css'
})
export class DeleteTeacherComponent implements OnInit{
  teacherId: number = 0;
  teacher: Teacher = {id: 0,name: "", department:""};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private deleteTeacherService: DeleteTeacherService,
    private showTeacherService: ShowTeacherService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const teacherId = +params['id'];
      if (teacherId) {
        this.teacherId = teacherId;
        this.getTeacherById(teacherId);
      } else {
        console.error('Invalid teacher ID provided.');
      }
    });
  }

  getTeacherById(teacherId: number): void {
    this.showTeacherService.showTeacherById(this.teacherId)
    .subscribe(
      (teacher: Teacher) => {
        console.log("successful!");
        this.teacher = teacher;
      },
      (error: any) => {
        this.toastr.error("Teacher id not found!");
        //alert("Teacher id not found!");
        console.error('Error fetching teacher information:', error);
        this.teacher = {  id: 0 ,name: "", department: "" }; 
      }
    );
  }
  cancelDelete() {
    this.toastr.info('Deletion cancelled.');
    //alert('Deletion cancelled.');
    this.router.navigate(['/teacher', 'component', 'teacher-home']);
  }

  confirmDelete() {
    if (this.teacher&& this.teacher.id) {
      this.deleteTeacherService.deleteTeacher(this.teacher.id).subscribe(
        () => {
          this.toastr.success("Success", "Teacher deleted successfully");
          //alert('Teacher deleted successfully.');
          this.router.navigate(['/teacher', 'component', 'teacher-home']);
        },
        (error: any) => {
          console.error('Error deleting teacher:', error);
          //console.error('Error deleting teacher:', error);
          alert('An error occurred while deleting the teacher.');
        }
      );
    } else {
      this.toastr.warning('No teacher selected.');
      //alert('No student selected.');
    }
  }
}