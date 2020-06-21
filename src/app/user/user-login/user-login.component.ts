import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import * as alertify from 'alertifyjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
    const user = this.authService.authUser(loginForm.value);
    if(user){
      localStorage.setItem('token',user.userName);
      alertify.success("You are successfully logedin");
      this.router.navigate(['/'])
    }else{
      alertify.error("somthing wrong, please check your credentials");
    }
  }
}
