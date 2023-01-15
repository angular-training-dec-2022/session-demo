import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string = '';

  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm){
    console.log(form.value.uName);
    console.log(form.value.uPassword);

    let user: User = {
      uName: form.value.uName,
      uPassword: form.value.uPassword,
      token: ''
    }

    this.userService.fetchAllUsers().subscribe((response)=>{
      let allUsers = response;
      let filterUsers = allUsers.filter((eachUser)=>eachUser.uName==user.uName && eachUser.uPassword== user.uPassword)
      console.log(filterUsers);
      if(filterUsers.length!=0){
        console.log("login success");
        this.authService.isLogged = true;
        this.router.navigate(['student-http']);
      }else{
        console.log("login failed")
        this.errorMessage = 'Invalid username/password '
      }
    });
   
    
    
  }
}

