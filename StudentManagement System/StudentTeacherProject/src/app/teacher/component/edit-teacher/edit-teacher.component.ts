import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EditTeacherService } from '../../services/editTeacher/edit-teacher.service';
import { Teacher } from '../../teacher.model';

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

  constructor(private editTeacherService: EditTeacherService) {}

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
        alert('Teacher updated successfully');
      }, error => {
        console.error('Failed to update teacher:', error);
        alert('Failed to update teacher.You provide wrong Id');
      });
  }
}
