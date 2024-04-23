import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteTeacherService {
  private domain = environment.domain;
  private apiUrl = `${this.domain}/Teacher`;
  constructor(private http: HttpClient) { }
  deleteTeacher(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
