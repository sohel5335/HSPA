
import { Component, OnInit } from '@angular/core';
import{HousingService} from 'src/app/services/housing.service'
import{IProperty} from 'src/app/property/iproperty'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  sellRent:number=1;
  Properties:Array<IProperty>=[];




  constructor(private housingService:HousingService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.sellRent=2;

    }
    this.housingService.getAllProperties( this.sellRent).subscribe(data=>
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
