import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../../../teacher/teacher.model';
import { Observable } from 'rxjs';
import { Student } from '../../student.model';

@Injectable({
  providedIn: 'root'
})
export class EditStudentService {
  private domain = environment.domain;
  private apiUrl = `${this.domain}/Student`;
  constructor(private http: HttpClient) { }
  updateStudentById(studentId: number, updatedStudentData: Partial<Student>): Observable<Student> {
    const url = `${this.apiUrl}/${studentId}`;
    return this.http.put<Student>(url, updatedStudentData);
  }
}
