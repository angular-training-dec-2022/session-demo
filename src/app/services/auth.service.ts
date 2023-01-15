import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: boolean = false;

  constructor(private userService: UserService) { }

  validateLogin(user: User): User[]{
    // let filterUsers: User[] = [];
    // this.userService.fetchAllUsers().subscribe((response)=>{
    //   let allUsers = response;
    //   filterUsers = allUsers.filter((eachUser)=>eachUser.uName==user.uName && eachUser.uPassword== user.uPassword)
    //   console.log(filterUsers);
    //   return filterUsers;
    // });
     return [];
  }
}
