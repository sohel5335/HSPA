import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  onSubmit(from:NgForm){
    console.log('done');
    console.log(from);
  }

}
