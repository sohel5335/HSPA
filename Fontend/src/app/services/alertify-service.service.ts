import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs'
@Injectable({
  providedIn: 'root'
})
export class AlertifyServiceService {

constructor() { }
success(){
  alertify.success('Congrates you are Successfylly registered');
}
error(){
  alertify.error('Kindly Provide required field');
}
warning(){
  alertify.warning('Warning message');
}
message(){
  alertify.message('Normal message');
}


}
