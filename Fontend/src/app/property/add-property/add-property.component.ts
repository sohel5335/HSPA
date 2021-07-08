import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router'
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('formTabs')
  formsTab!: TabsetComponent;
  propertyTypes:Array<string>=['House','Apartment','Duplex'];
  furnishTypes:Array<string>=['Fully','Semi','unfurnish'];
  gatedCommunity:Array<string>=['Yes','No'];
  readyToMove:Array<string>=['East','West','North','South'];
  constructor(private route:Router) { }

  ngOnInit() {
  }
  onSubmit(from:NgForm){
    console.log('done');
    console.log(from);
  }
  selectTab(tabId: number) {
    this.formsTab.tabs[tabId].active = true;
  }

}
