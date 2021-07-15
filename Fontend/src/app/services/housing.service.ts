import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import{IPropertyBase} from 'src/app/model/IPropertyBase'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Property } from '../model/Property';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }
getCities():Observable<any[]>{
  return this.http.get<any[]>('http://localhost:5000/api/City')
}

  getProperty (id:number):Observable<any>
  {

    return this.getAllProperties().pipe(map(propertyArry=>{
    
      // throw new Error("some error");
     return propertyArry.find(p=>p.Id===id);

    }));
  }

  getAllProperties( sellRent?:number):Observable<Property[]>{
    return  this.http.get('data/Properties.json').pipe(map(data=>{
     const propertyArray:Array<Property>=[];
     let dataArray: any = [];
     dataArray = data;
     let localstore=JSON.parse(localStorage.getItem('newProp')!);
     for(const i in localstore){
      if(sellRent){
      if(localstore.hasOwnProperty(i)&& localstore[i].SellRent==sellRent){
       propertyArray.push(localstore[i])
      }
    }else{
      propertyArray.push(localstore[i])
    }
   }

      for(const i in dataArray){
        if(sellRent){
         if(dataArray.hasOwnProperty(i)&& dataArray[i].SellRent==sellRent){
          propertyArray.push(dataArray[i])
         }}
         else{
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
