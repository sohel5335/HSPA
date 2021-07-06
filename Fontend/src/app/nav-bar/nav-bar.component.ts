import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  logIn(){
    return localStorage.getItem('token');
  }
  onLogOut(){
    localStorage.removeItem('token');
    this.route.navigate(['/user-login'])
  }
}
