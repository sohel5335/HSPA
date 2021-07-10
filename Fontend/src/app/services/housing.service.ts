import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import{IPropertyBase} from 'src/app/model/IPropertyBase'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Property } from '../model/Property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties( sellRent:number):Observable<IPropertyBase[]>{
    return  this.http.get('data/Properties.json').pipe(map(data=>{
     const propertyArray:Array<IPropertyBase>=[];
     let dataArray: any = [];
     dataArray = data;
     let localstore=JSON.parse(localStorage.getItem('newProp')!);
     for(const i in localstore){
      if(localstore.hasOwnProperty(i)&& localstore[i].SellRent==sellRent){
       propertyArray.push(localstore[i])
      }
   }

      for(const i in dataArray){
         if(dataArray.hasOwnProperty(i)&& dataArray[i].SellRent==sellRent){
          propertyArray.push(dataArray[i])
         }
      }

     return  propertyArray;
    }));
  }

addProperty(porperty:Property){
  let newProp=[porperty];
  if(localStorage.getItem('newProp')){
    newProp=[porperty,
      ...JSON.parse(localStorage.getItem('newProp')!)]
  }
 
localStorage.setItem('newProp',JSON.stringify(newProp))
}

newPropID() {
  if (localStorage.getItem('PID')) {
    localStorage.setItem('PID', String(+localStorage.getItem('PID')! + 1));
    return +localStorage.getItem('PID')!;
  } else {
    localStorage.setItem('PID', '101');
    return 101;
  }
}

}
