import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { User } from 'src/app/model/user';
import{UserServiceService} from 'src/app/services/user-service.service'

import{AlertifyServiceService} from 'src/app/services/alertify-service.service'
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit 
{

  registrationForm!: FormGroup;
  user!: User;
  userSubmited:boolean=false;
  constructor(private fb:FormBuilder,
    private alertify:AlertifyServiceService,
    private userService:UserServiceService) { }

  ngOnInit() 
  {
    // this.registrationForm = new FormGroup(
    //   {
    //     userName:new FormControl(null,Validators.required),
    //     email:new FormControl(null,[Validators.required,Validators.email]),
    //     password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //     confirmPassword:new FormControl(null,[Validators.required]),
    //     mobile:new FormControl(null,[Validators.required,Validators.minLength(11)])
    //   },{validators:this.passwordMatchValidator}
    // )
    this.createRegistrationform();
  }

     createRegistrationform(){
      this.registrationForm=this.fb.group({
        userName:[null,Validators.required],
        email:[null,[Validators.required,Validators.email]],
        password:[null,[Validators.required,Validators.minLength(8)]],
        confirmPassword:[null,[Validators.required]],
        mobile:[null,[Validators.required,Validators.minLength(11)]]
      },{validators:this.passwordMatchValidator})
     }

  passwordMatchValidator(fg:AbstractControl):{[key:string]:boolean}|null{
    return fg.get('password')?.value===fg.get('confirmPassword')?.value? null:{notMatched:true};
  }

  // ------------------------------------
  // Getter methods for all form controls
  // ------------------------------------
  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }
  mapUser():User{
    return this.user={
     userName:this.userName.value,
     email:this.email.value,
     password:this.password.value,
     confirmPassword:this.confirmPassword.value,
     mobile:this.mobile.value
    }
  
    
  }
  // ------------------------
  onSubmit(){
   
    console.log(this.registrationForm.value);
    this.userSubmited=true;
    if(this.registrationForm.valid)
    {
    
      this.userService.addUser(this.mapUser());
      this.userSubmited=false;
      this.registrationForm.reset();
      this.alertify.success();
    }
    else{
      this.alertify.error();
    }
  }
 
}
