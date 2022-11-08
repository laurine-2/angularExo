import { Component, OnInit} from '@angular/core';
import { STUDENTS } from './mock-student-list';
import { Student } from './Student';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  
  styles: []
  
})
export class AppComponent implements OnInit{
  StudentList: Student[] = STUDENTS;
  StudentSelected: Student| undefined;

 ngOnInit() :void{
  console.table(this.StudentList);
 
 }

 selectOneStudent (StudentId: string) {
  const Student: Student|undefined = this.StudentList.find(
    Student => Student.id == +StudentId
  );

  if (Student){
    console.log('lvous avez clique sur letudiant ${Student.name}');
    this.StudentSelected = Student;
  }else{
    console.log("letudiant nexiste pas");
    this.StudentSelected = Student;
  }
 }

}







