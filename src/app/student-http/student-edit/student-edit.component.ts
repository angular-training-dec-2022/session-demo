import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentHttpService } from 'src/app/services/student-http.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  reactiveForm: FormGroup = new FormGroup({
    rsId: new FormControl(null),
    // rsName: new FormControl(null),
    // rsMark: new FormControl(null),
    personalData: new FormGroup({
      rsName: new FormControl(null),
      rsMark: new FormControl(null),
    }),
    rsDOB: new FormControl(null),
    rsGender: new FormControl(null)
  });

  allMarks = [
    { id: 1, value: 100},
    { id: 2, value: 200},
    { id: 3, value: 300},
    { id: 4, value: 400},
    { id: 5, value: 500}
  ];

  allGenders = [
    { id: 1, value: 'Male'},
    { id: 2, value: 'Female'},
    { id: 3, value: 'Other'},
  ]
  constructor(private activatedRoute:ActivatedRoute, 
              private studentHttpService: StudentHttpService,
              private router: Router) { }

  ngOnInit(): void {
    // first we should exract the route parameter studId
    let studentId = this.activatedRoute.snapshot.paramMap.get('studId');
    
    // lets fetch the student with the student is from the backend appln
    if(studentId!=null){
      this.studentHttpService.fetchAStudent(+studentId).subscribe((response)=>{
        console.log(response);
        this.reactiveForm.setValue({
          rsId: response.id,
          personalData: {
            rsName: response.studentName,
            rsMark: response.studentTotalMarks,
          },
          // rsName: response.studentName,
          // rsMark: response.studentTotalMarks,
          rsDOB: response.studentDOB,
          rsGender: response.studentGender
        })
      })
    }
    
  }

  resetData(){
    this.reactiveForm.reset();
  }

  updateData(){
    console.log(this.reactiveForm);
    let updateStudent = {
      id: this.reactiveForm.value.rsId,
      // studentName: this.reactiveForm.value.rsName,
      // studentTotalMarks: this.reactiveForm.value.rsMark,
      studentName: this.reactiveForm.value.personalData.rsName,
      studentTotalMarks: this.reactiveForm.value.personalData.rsMark,
      studentDOB: this.reactiveForm.value.rsDOB,
      studentGender: this.reactiveForm.value.rsGender
    }

    this.studentHttpService.updateStudent(updateStudent).subscribe((response)=>{
      this.router.navigate(["student-http"]);
    })
  }
}
