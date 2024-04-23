import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddStudentService {
  private domain = environment.domain;
  private apiUrl = `${this.domain}/Student`;
  constructor(private http: HttpClient) { }
  addStudent(studentData : Student): Observable<Student>{
    return this.http.post<Student>(this.apiUrl,studentData);
  }
}
