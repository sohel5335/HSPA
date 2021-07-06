import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs'
@Injectable({
  providedIn: 'root'
})
export class AlertifyServiceService {

constructor() { }
success(success?:string){
  alertify.success(success);
}
error(ms?:string){
  alertify.error(ms+"");
}
warning(mas?:string){
  alertify.warning(mas);
}
message(mas?:string){
  alertify.message(mas);
}


}
