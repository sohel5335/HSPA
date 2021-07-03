import { Component, OnInit } from '@angular/core';
import{ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  PropertyId!: Number;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {

    this.PropertyId=+this.route.snapshot.params['id'];
    this.route.params.subscribe(
        (param)=>{
          this.PropertyId = +param['id'];
        }

    );
  }
  onSelectNext(){
    this.PropertyId =+this.PropertyId+1;
    this.router.navigate(['property-details', this.PropertyId])
  }
}
