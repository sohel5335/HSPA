import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }
authService(user:any){
  let UserArray=[];
  if(localStorage.getItem('user')){
    UserArray=JSON.parse(localStorage.getItem('user')!);

  }

  return UserArray.find((p: { userName: any; password: any; })=>p.userName===user.userName && p.password==user.password);
}
}
