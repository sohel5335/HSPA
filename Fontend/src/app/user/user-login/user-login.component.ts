import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { AlertifyServiceService } from 'src/app/services/alertify-service.service';
import {AuthService} from 'src/app/services/auth.service'
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService:AuthService,private alertify:AlertifyServiceService,
    private route:Router
    ) { }

  ngOnInit() {
  }
  onLigin(userLign:NgForm){
    console.log(userLign);
    const token =this.authService.authService(userLign.value);
    if(token){
      localStorage.setItem('token',token.userName);
      this.alertify.success('LogIn Successfully');
      this.route.navigate(['/']);
    }
    else{
      this.alertify.error('please provide valid UserName or password');
    }

  }
}
