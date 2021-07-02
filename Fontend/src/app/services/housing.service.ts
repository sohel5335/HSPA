import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import{IProperty} from '../property/iproperty'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }
  getAllProperties():Observable<IProperty[]>{
    return  this.http.get<IProperty[]>('data/Properties.json')
  }

}
