import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrl: './delete-student.component.css'
})
export class DeleteStudentComponent {
cancelDelete() {
  alert('Deletion cancelled.');
}
confirmDelete() {
  alert('Student deleted successfully.');
}
student: any;

}
