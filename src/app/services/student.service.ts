import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModule } from '../models/student/student.module';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  public getStudents():Observable<Array<StudentModule>>{
    return this.http.get<Array<StudentModule>>('http://localhost:8090/STUDENT-SERVICE/students');
  }
}
