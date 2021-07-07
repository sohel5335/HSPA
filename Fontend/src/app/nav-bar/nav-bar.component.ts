import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyServiceService } from 'src/app/services/alertify-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedUserName: string='';
  constructor(private alertify:AlertifyServiceService) { }
  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];
  ngOnInit() {
  }
  logIn(){
    this.loggedUserName=localStorage.getItem('token')!;
    return this.loggedUserName;
  }
  onLogOut(){
    localStorage.removeItem('token');
    this.alertify.success("Logged Out Successfuly");
    
  }
}
