import { Component, OnInit } from '@angular/core';
import { StudentHttpService } from '../services/student-http.service';
import { Student } from './student';

@Component({
  selector: 'app-student-list-http',
  templateUrl: './student-list-http.component.html',
  styleUrls: ['./student-list-http.component.css']
})
export class StudentListHttpComponent implements OnInit {

  toggleEditId: number = 0;
  deleteMessage: string='';
  filterData: string = '';
  allStudents: Student[] = [];
  filterStudents: Student[] = [];

  constructor(private studentHttpService: StudentHttpService) {
   
  }

  loadStudents(){
    this.studentHttpService.fetchAllStudents().subscribe((response)=>{
      this.allStudents = response;
      this.filterStudents = this.allStudents;
      this.deleteMessage = '';
    });
  }

  ngOnInit(): void {
    this.loadStudents();
  }

  addStudent(){
    
  }

  editStudent(student: Student){
    if(this.toggleEditId == student.id){
      this.studentHttpService.updateStudent(student).subscribe((response)=>{
        this.loadStudents();
        this.toggleEditId = 0;
      })
    }else{
      this.toggleEditId = student.id;
    }
  }

  removeStudent(student: Student){
    this.studentHttpService.deleteStudent(student.id).subscribe((response)=>{
      // if we are here means deletion was successful
      
      this.loadStudents();
      this.deleteMessage = 'Student with ID: ' + student.id +' is removed!';
    }
    )
  }

  filterByGender(){
    if(this.filterData == ''){
      this.filterStudents = this.allStudents
    }else{
      this.filterStudents = this.allStudents.filter((eachStudent)=> eachStudent.studentGender.toLowerCase().includes(this.filterData.toLowerCase()));
    }
      
    
  }

}
