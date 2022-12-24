import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  filterData: string = '';

  
  allStudents: Student[] = [
    {
      id: 101,
      studentName: 'Ram Mohan',
      studentTotalMarks: 358,
      studentDOB: new Date(5,5,1990),
      studentGender: 'Male'
    },
    {
      id: 102,
      studentName: 'Nithya Mahadevan',
      studentTotalMarks: 240,
      studentDOB: new Date(7,7,1992),
      studentGender: 'Female'
    },
    {
      id: 103,
      studentName: 'Rakesh Roy',
      studentTotalMarks: 427,
      studentDOB: new Date(2,2,1991),
      studentGender: 'Male'
    },
    {
      id: 104,
      studentName: 'Meena Kumari',
      studentTotalMarks: 353,
      studentDOB: new Date(7,7,1992),
      studentGender: 'Female'
    }
  ];

  filterStudents: Student[] =this.allStudents;

  constructor() { }

  ngOnInit(): void {
  }

  addStudent(){
    this.allStudents.push({
      id: 105,
      studentName: 'TEST',
      studentTotalMarks: 343,
      studentDOB: new Date(3,5,1992),
      studentGender: 'Female'
  });
  }

  filterByGender(){
    if(this.filterData == ''){
      this.filterStudents = this.allStudents
    }else{
      this.filterStudents = this.allStudents.filter((eachStudent)=> eachStudent.studentGender.toLowerCase() == this.filterData.toLowerCase());
    }
      
    
  }

}
