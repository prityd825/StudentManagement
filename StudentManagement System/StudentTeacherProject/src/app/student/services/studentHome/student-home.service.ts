import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../../student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentHomeService {
  private domain = environment.domain;
  private apiUrl = `${this.domain}/Student`;
  constructor(private http: HttpClient) { }
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }
}
