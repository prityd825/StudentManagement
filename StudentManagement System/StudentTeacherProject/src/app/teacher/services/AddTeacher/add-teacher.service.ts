/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { TeacherModule } from '../../teacher.module';

@Injectable({
  providedIn: 'root'
})
export class AddTeacherService {
  private domain = environment.domain;
  private apiUrl = '${this.domain}/Teachers';
  constructor(private http: HttpClient) {}
  AddTeacher(teacherData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, teacherData);
  }
}
*/