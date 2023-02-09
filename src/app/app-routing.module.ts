import { ProfessorsComponent } from './professors/professors.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'professors', component:ProfessorsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
