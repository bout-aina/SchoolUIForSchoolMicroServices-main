import { ProfessorService } from './../services/professor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css']
})
export class ProfessorsComponent implements OnInit {

  constructor(private professorService:ProfessorService) { }
  professorlist:any;

  ngOnInit(): void {
    this.professorService.getProfessors().subscribe(
      (data)=>{
        this.professorlist=data;
      },
      (error)=>{
        console.log(error)
      });
  }

}


