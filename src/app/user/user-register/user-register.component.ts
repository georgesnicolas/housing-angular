import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/models/IUser.interface';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  registrationForm:FormGroup;
  user: IUser;
  userSubmitted:boolean;

  constructor(private fb:FormBuilder,private userservice: UserService) { }

  ngOnInit(): void {
    // this.registrationForm = new FormGroup({
    //   userName: new FormControl(null,Validators.required),
    //   email: new FormControl(null,[Validators.required, Validators.email]),
    //   password: new FormControl(null,[Validators.required, Validators.minLength(8)]),
    //   confirmPassword: new FormControl(null,[Validators.required]),
    //   mobile: new FormControl(null,[Validators.required, Validators.maxLength(10)])
    // },this.passwordMatchingValidator);
    this.createRegistrationForm();
  }

  createRegistrationForm(){
    this.registrationForm = this.fb.group({
      userName:[null,Validators.required],
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required,Validators.minLength(8)]],
      confirmPassword:[null,Validators.required],
      mobile:[null,[Validators.required,Validators.maxLength(10)]]
    },{validators:this.passwordMatchingValidator})
  }

  passwordMatchingValidator(fg:FormGroup):Validators{
    return fg.get('password').value === fg.get('confirmPassword').value ? null : {
      notmatched: true
    }
  }


  // Getter methods for all form controls
  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }

  get email(){
    return this.registrationForm.get('email') as FormControl;
  }

  get password(){
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }

  onSubmit(){
    this.userSubmitted = true;
    if(this.registrationForm.valid){
      //this.user = Object.assign(this.user,this.registrationForm.value);
      this.userservice.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
      alertify.success("Congrats, you are successfully registered");
    }else{
      alertify.error("Kindly provide the required fields");
    }
  }

  userData():IUser{
    return this.user = {
      userName : this.userName.value,
      email : this.email.value,
      password : this.password.value,
      mobile : this.mobile.value
    }
  }



}
