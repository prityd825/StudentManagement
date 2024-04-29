import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EditTeacherService } from '../../services/editTeacher/edit-teacher.service';
import { Teacher } from '../../teacher.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent {
  @Input() teacher!: Teacher;
  editedTeacher: Teacher = {
    id: 0,
    name: '',
    department: ''
  };

  constructor(
    private editTeacherService: EditTeacherService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
  ) {}


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const teacherId = +params['id'];
      if (teacherId) {
        this.getTeacherById(teacherId);
      } else {
        console.error('Invalid teacher ID provided.');
      }
    });
  }

  getTeacherById(teacherId: number): void {
    this.editTeacherService.getTeacherById(teacherId)
      .subscribe(
        (teacher: Teacher) => {
          this.editedTeacher = teacher;
        },
        (error: HttpErrorResponse) => {
          console.error('Error fetching teacher information:', error);
          //alert('Failed to fetch teacher information');
          this.toastr.error('Failed to fetch teacher information');
        }
      );
  }

  ngOnChanges() {
    if (this.teacher && this.teacher.id) {
      this.editedTeacher = { ...this.teacher };
    }
  }

  updateTeacher(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const updateTeacherCommand = {
      id: this.editedTeacher.id,
      name: this.editedTeacher.name,
      department: this.editedTeacher.department
    };

    this.editTeacherService.updateTeacherById(this.editedTeacher.id, updateTeacherCommand)
      .subscribe(updatedTeacher => {
        console.log('Updated teacher:', updatedTeacher);
        //alert('Teacher updated successfully');
        this.toastr.success('Teacher updated successfully');
        this.router.navigate(['teacher/component/teacher-home']);
      }, error => {
        console.error('Failed to update teacher:', error);
        //alert('Failed to update teacher.You provide wrong Id');
        this.toastr.error('Failed to update teacher. You provided wrong ID.');
      });
  }
}
