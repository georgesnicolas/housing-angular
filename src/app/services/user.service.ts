import { Injectable } from '@angular/core';
import { IUser } from '../models/IUser.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  addUser(user:IUser){
    let users = [];
    if(localStorage.getItem('Users')){
      users = JSON.parse(localStorage.getItem('Users'));
      users = [user,...users];
    } else {
      users = [user];
    }
    localStorage.setItem('Users',JSON.stringify(users));
  }

}
