import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import{ActivatedRoute, Router } from '@angular/router'
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import { Property } from 'src/app/model/Property';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  public PropertyId!: Number;
  property = new Property();
  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];
  constructor(private route:ActivatedRoute,private router:Router,private housing:HousingService) { }

  ngOnInit() {

    this.PropertyId=+this.route.snapshot.params['id'];
    this.route.data.subscribe((data:any)=>{
      this.property=data['prp'];
    })
    this.route.params.subscribe(
        (param)=>{
          this.PropertyId = +param['id'];
        }

    );

    // this.housing.getProperty(+this.PropertyId).subscribe((data:any)=>{
    //   debugger;
    //   this.property=data;
    // },error=>{
    //   this.router.navigate(['/']);
    // });


    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
     
    ];

    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/interior-1.jpg',
        medium: 'assets/images/interior-1.jpg',
        big: 'assets/images/interior-1.jpg'
      },
      {
        small: 'assets/images/interior-2.jpg',
        medium: 'assets/images/interior-2.jpg',
        big: 'assets/images/interior-2.jpg'
      },
      {
        small: 'assets/images/interior-3.jpg',
        medium: 'assets/images/interior-3.jpg',
        big: 'assets/images/interior-3.jpg'
      },
      {
        small: 'assets/images/interior-4.jpg',
        medium: 'assets/images/interior-4.jpg',
        big: 'assets/images/interior-4.jpg'
      },
      {
        small: 'assets/images/interior-5.jpg',
        medium: 'assets/images/interior-5.jpg',
        big: 'assets/images/interior-5.jpg'
      },
      {
        small: 'assets/images/interior-6.jpg',
        medium: 'assets/images/interior-6.jpg',
        big: 'assets/images/interior-6.jpg'
      },
      {
        small: 'assets/images/interior-7.jpg',
        medium: 'assets/images/interior-7.jpg',
        big: 'assets/images/interior-7.jpg'
      }
    ];
  }

}
