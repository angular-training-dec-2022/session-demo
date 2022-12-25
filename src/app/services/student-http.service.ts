import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../student-list-http/student';

@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {

  baseUrl: string = 'http://localhost:3000/students';

  constructor(private http: HttpClient) { }

  fetchAllStudents(): Observable<Student[]>{
    // use HttpClient and place a get request
    // we have to inject HttpClient
    // this get request will return an Observable

    return this.http.get<Student[]>(this.baseUrl);
  }

  addStudent(student: Student): Observable<Student>{
    return this.http.post<Student>(this.baseUrl, student);
  }

  updateStudent(student: Student): Observable<Student>{
    return this.http.put<Student>(this.baseUrl+'/'+student.id, student);
  }

  deleteStudent(studentId: number): Observable<void>{
    return this.http.delete<void>(this.baseUrl+'/'+studentId);
  }
}
