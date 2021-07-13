
import { Component, OnInit } from '@angular/core';
import{HousingService} from 'src/app/services/housing.service'
import{IPropertyBase} from 'src/app/model/IPropertyBase'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  sellRent:number=1;
  Properties:Array<IPropertyBase>=[];
  Today = new Date();
  City:string='';
  searchCity:string='';
  sortBy:string='';
  SortDirection:string='asc';
  constructor(private housingService:HousingService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    debugger;
    if(this.route.snapshot.url.toString()){
      this.sellRent=2;

    }
    this.housingService.getAllProperties( this.sellRent).subscribe(data=>
       { 
         this.Properties=data;
       },
         err=>{
          console.log(err)
         }
        );
   
  }
  onCityFilter(){
    this.searchCity=this.City;
    return this.searchCity;
  }
  onClearCityFilter(){
    this.searchCity='';
    this.City='';
  }
  onSortDirection(){
    debugger;
   if(this.SortDirection==='asc')
   {
    this.SortDirection='desc';
   }
   else if(this.SortDirection=='desc'){
    this.SortDirection='asc';
   }
  }
}
