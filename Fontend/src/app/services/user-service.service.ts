import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }
addUser(user:User){
  let users=[]
  if(localStorage.getItem('user')){
    users=JSON.parse( localStorage.getItem('user')!)
    users=[user,...users]
  }
  else{
    users=[user]
  }
  localStorage.setItem("user", JSON.stringify(users));
}
}
