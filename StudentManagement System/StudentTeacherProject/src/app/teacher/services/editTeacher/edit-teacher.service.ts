import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../../teacher.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditTeacherService {
  private domain = environment.domain;
  private apiUrl = `${this.domain}/Teacher`;
  constructor(private http: HttpClient) { }
  updateTeacherById(teacherId: number, updatedTeacherData: Partial<Teacher>): Observable<Teacher> {
    const url = `${this.apiUrl}/${teacherId}`;
    return this.http.put<Teacher>(url, updatedTeacherData);
  }
}
