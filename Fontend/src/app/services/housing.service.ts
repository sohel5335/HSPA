import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import{IProperty} from '../property/iproperty'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }
  getAllProperties( sellRent:number):Observable<IProperty[]>{
    return  this.http.get('data/Properties.json').pipe(map(data=>{
     const propertyArray:Array<IProperty>=[];
     let dataArray: any = [];
     dataArray = data;
      for(const i in dataArray){
         if(dataArray.hasOwnProperty(i)&& dataArray[i].SellRent==sellRent){
          propertyArray.push(dataArray[i])
         }
      }

     return  propertyArray;
    }));
  }

}
