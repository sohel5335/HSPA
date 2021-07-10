import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, NgForm, Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/IPropertyBase';

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
  addPropertyForm!:FormGroup
  constructor(private route:Router,private fb:FormBuilder) { }

  ngOnInit() {
    this.addPropertyForm=this.fb.group({BasicInfo: this.fb.group({
      SellRent: ['1', Validators.required],
      PType: [null, Validators.required],
      BHK: [null, Validators.required],
      Name: [null, [Validators.required, Validators.minLength(5)]],
      FType: [null, Validators.required],
      City: [null]
    }),
    PriceInfo:this.fb.group({
      Price:[null,Validators.required]
    }),

    });

  
    this.addPropertyForm.valueChanges.subscribe(x => 
      {
      this.propertyView.SellRent=  this.BasicInfo.get('SellRent')?.value;
      this.propertyView.City=  this.BasicInfo.get('City')?.value;
      this.propertyView.BHK=  this.BasicInfo.get('BHK')?.value;
      this.propertyView.Name=  this.BasicInfo.get('Name')?.value;
      this.propertyView.FType=  this.BasicInfo.get('FType')?.value;
      this.propertyView.PType=  this.BasicInfo.get('PType')?.value;
      this.propertyView.Price=this.PriceInfo.get('Price')?.value;
  })
    
  }

  createAddPropertyForm(){

  }

  
  propertyView:IPropertyBase={
    Id:null!,
    Name:"",
    PType:"",
    Price:null!,
    SellRent:null!,
    FType:"",
    BHK:null!,
    City:"",
    RTM:null!,
    BuiltArea:null!
  };

  /// get groupName
  get BasicInfo() {
    return this.addPropertyForm.controls.BasicInfo as FormGroup;
  }
get PriceInfo(){
  return this.addPropertyForm.controls.PriceInfo as FormGroup;
}
//controll name get

  get SellRent(){
    return this.BasicInfo.controls.SellRent as FormControl
  }
get Price(){
  return this.PriceInfo.controls.Price as FormControl
}

  onSubmit(){
    this.isNexttab=true;
    if(this.BasicInfo.invalid){
        this.formsTab.tabs[0].active = true;
        return;
    }
    if(this.Price.invalid){
      this.formsTab.tabs[1].active = true;
      return;
  }

  }
   isNexttab:boolean=false;
  selectTab(tabId: number,isCurrentabValid:boolean) {
    this.isNexttab=true;
    if(isCurrentabValid){
      this.formsTab.tabs[tabId].active = true;
    }
    
  }

}
