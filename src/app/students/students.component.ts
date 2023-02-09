import { StudentModule } from './../models/student/student.module';
import { Observable, catchError } from 'rxjs';
import { StudentService } from './../services/student.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  
  studentsList:any;

  constructor(private studentService:StudentService) { }
  

  ngOnInit(): void {
   this.studentService.getStudents().subscribe(
      (data)=>{
        this.studentsList=data;
      },
      (error)=>{
        console.log(error)
      
      });

  }

}


