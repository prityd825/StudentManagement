import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../../teacher.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherHomeService {
  private domain = environment.domain;
  private apiUrl = `${this.domain}/Teacher`;
  constructor(private http: HttpClient) { }
  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.apiUrl);
  }
}
