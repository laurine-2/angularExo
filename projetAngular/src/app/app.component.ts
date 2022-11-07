import { Component, OnInit } from '@angular/core';
import { STUDENTS } from './mock-student-list';
import { Student } from './Student';

@Component({
  selector: 'app-root',
  template: `
   
      <h1>
        Liste des etudiants!
      </h1>  
      
  `,
  styles: []
})
export class AppComponent implements OnInit{
  etudiant: Student[] = STUDENTS;
 ngOnInit() :void{
  console.table(this.etudiant);
  console.log(this.etudiant[0].name);
 }

 selectStudent = (StudentName: string) =>{
  console.log('vous avez choisir un etudant ${studentName}')
 }
}






