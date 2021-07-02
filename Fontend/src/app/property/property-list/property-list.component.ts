
import { Component, OnInit } from '@angular/core';
import{HousingService} from 'src/app/services/housing.service'
import{IProperty} from 'src/app/property/iproperty'

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties:Array<IProperty>=[];




  constructor(private housingService:HousingService) { }

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe(data=>
       { this.Properties=data
         console.log(data)
       },
         err=>{
          console.log(err)
         }
        );
    // this.http.get('data/Properties.json').subscribe(data=>
    //  { this.Properties=data
    //    console.log(data)}
    //   );
  }

}
