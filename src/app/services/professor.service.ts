import { ProfessorModule } from './../models/professor/professor.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http:HttpClient) { }
  public getProfessors():Observable<Array<ProfessorModule>>{
    return this.http.get<Array<ProfessorModule>>('http://localhost:8090/PROFESSORS-SERVICE/professors');
  }
}
