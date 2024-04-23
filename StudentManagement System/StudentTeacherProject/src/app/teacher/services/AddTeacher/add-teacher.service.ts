import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../../teacher.model';

@Injectable({
  providedIn: 'root'
})
export class AddTeacherService {
  private domain = environment.domain;
  private apiUrl = `${this.domain}/Teacher`;

  constructor(private http: HttpClient) { }
  addTeacher(teacherData: Teacher): Observable<Teacher>{
    return this.http.post<Teacher>(this.apiUrl,teacherData);
  }
}
