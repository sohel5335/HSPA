import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Property } from '../model/Property';
import { HousingService } from './housing.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailsResolverService implements Resolve<Property>{

constructor(private housing:HousingService,private router:Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Property | Observable<Property> 
  {
    const propId=route.params['id'];

    return this.housing.getProperty(+propId).pipe(
     catchError((error: any): Observable<any>=>{
      this.router.navigate(['/']);
      return of([]);
     })
    );
  }

}
