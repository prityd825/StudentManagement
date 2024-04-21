import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-teacher',
  templateUrl: './delete-teacher.component.html',
  styleUrl: './delete-teacher.component.css'
})
export class DeleteTeacherComponent {

  teacher: any;

  constructor() { }
 confirmDelete() {
alert('Teacher deleted successfully.');
}
cancelDelete() {
  alert('Deletion canceled.');
}


}
