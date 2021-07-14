import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, NgForm, Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/IPropertyBase';
import { Property } from 'src/app/model/Property';
import{AlertifyServiceService} from 'src/app/services/alertify-service.service'
import { HousingService } from 'src/app/services/housing.service';

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
  addPropertyForm!:FormGroup;
  property  = new Property();
  housingService: any;
  Cities:string[]=[]
  constructor(private route:Router,private fb:FormBuilder,private alertify:AlertifyServiceService,private housingservice:HousingService) { }

  ngOnInit() {

    this.housingservice.getCities().subscribe(data=>{
      this.Cities=data;
    });
    this.addPropertyForm=this.fb.group({BasicInfo: this.fb.group({
      SellRent: ['1', Validators.required],
      PType: [null, Validators.required],
      BHK: [null, Validators.required],
      Name: [null, [Validators.required, Validators.minLength(5)]],
      FType: [null, Validators.required],
      City: ['']
    }) ,
    PriceInfo: this.fb.group({
      Price: [null, Validators.required],
      BuildArea: [null, Validators.required],
      CarpetArea: [null, Validators.required],
      Security: [null],
      Maintenance: [null],
    }),
    AddressInfo: this.fb.group({
      Floor: [null, Validators.required],
      TFloor: [null, Validators.required],
      Address: [null, Validators.required],
      Landmark: [null],
    }),
    OtherInfo: this.fb.group({
      RTM: [null],
      AOP: [null],
      PossessionOn: [null],
      Gated: [null],
      Entrance: [null],
      Description: [null],
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
    BuildArea:null!
  };




//controll name get
//#region formGroup
get BasicInfo() {
  return this.addPropertyForm.controls.BasicInfo as FormGroup;
}

get PriceInfo() {
  return this.addPropertyForm.controls.PriceInfo as FormGroup;
}

get AddressInfo() {
  return this.addPropertyForm.controls.AddressInfo as FormGroup;
}

get OtherInfo() {
  return this.addPropertyForm.controls.OtherInfo as FormGroup;
}

    // #endregion
  //#region <Form Controls>

get SellRent() {
  return this.BasicInfo.controls.SellRent as FormControl;
}

get Price() {
  return this.PriceInfo.controls.Price as FormControl;
}

get Name() {
  return this.BasicInfo.controls.Name as FormControl;
}

get RTM() {
  return this.OtherInfo.controls.RTM as FormControl;
}

get PType() {
  return this.BasicInfo.controls.PType as FormControl;
}

get BHK() {
  return this.BasicInfo.controls.BHK as FormControl;
}

get FType() {
  return this.BasicInfo.controls.FType as FormControl;
}

get City() {
  return this.BasicInfo.controls.City as FormControl;
}

get BuildArea() {
  return this.PriceInfo.controls.BuildArea as FormControl;
}

get CarpetArea() {
  return this.PriceInfo.controls.CarpetArea as FormControl;
}

get Security() {
  return this.PriceInfo.controls.Security as FormControl;
}

get Maintenance() {
  return this.PriceInfo.controls.Maintenance as FormControl;
}

get Floor() {
  return this.AddressInfo.controls.Floor as FormControl;
}

get TFloor() {
  return this.AddressInfo.controls.TFloor as FormControl;
}

get Address() {
  return this.AddressInfo.controls.Address as FormControl;
}

get Landmark() {
  return this.AddressInfo.controls.Landmark as FormControl;
}

get AOP() {
  return this.OtherInfo.controls.AOP as FormControl;
}

get Gated() {
  return this.OtherInfo.controls.Gated as FormControl;
}

get Entrance() {
  return this.OtherInfo.controls.Entrance as FormControl;
}

get PossessionOn() {
  return this.OtherInfo.controls.PossessionOn as FormControl;
}

get Description() {
  return this.OtherInfo.controls.Description as FormControl;
}
//#endregion
  onSubmit(){
   if(this.allTabsValid()){
     this.mapProperty()
     this.housingservice.addProperty(this.property);
    this.alertify.success('Congrats, your property listed successfully on our website');
      if(this.SellRent.value == '2'){
        this.route.navigate(['/rent-property']);
      } else {
        this.route.navigate(['/']);
      }
   }
   else{
     this.alertify.error('Please review the form and provide all valid entries');
   }

  }
 IDdd!:Number;
  mapProperty(): void {
    debugger;
   
    if (localStorage.getItem('PID')) {
      localStorage.setItem('PID', String(+localStorage.getItem('PID')! + 1));
      this.IDdd= +localStorage.getItem('PID')!;
    } else {
      localStorage.setItem('PID', '101');
      this.IDdd;
    }

    this.property.Id = +this.IDdd;
    this.property.SellRent = +this.SellRent.value;
    this.property.BHK = this.BHK.value;
    this.property.PType = this.PType.value;
    this.property.Name = this.Name.value;
    this.property.City = this.City.value;
    this.property.FType = this.FType.value;
    this.property.Price = this.Price.value;
    this.property.Security = this.Security.value;
    this.property.Maintenance = this.Maintenance.value;
    this.property.BuildArea = this.BuildArea.value;
    this.property.CarpetArea = this.CarpetArea.value;
    this.property.FloorNo = this.Floor.value;
    this.property.TotalFloor = this.TFloor.value;
    this.property.Address = this.Address.value;
    this.property.Address2 = this.Landmark.value;
    this.property.RTM = this.RTM.value;
    this.property.AOP = this.AOP.value;
    this.property.Gated = this.Gated.value;
    this.property.MainEntrance = this.Entrance.value;
    this.property.Possession = this.PossessionOn.value;
    this.property.Description = this.Description.value;
    this.property.PostedOn = new Date().toString();
    this.property.BuildArea=this.PriceInfo.value
  }

allTabsValid():boolean{
  this.isNexttab=true;
  if(this.BasicInfo.invalid){
      this.formsTab.tabs[0].active = true;
      return false;
  }
  if(this.Price.invalid){
    this.formsTab.tabs[1].active = true;
    return false;
}
if(this.AddressInfo.invalid){
  this.formsTab.tabs[2].active = true;
  return false;
}
if(this.OtherInfo.invalid){
this.formsTab.tabs[3].active = true;
return false;
}

  return true;
}

   isNexttab:boolean=false;
  selectTab(tabId: number,isCurrentabValid:boolean) {
    this.isNexttab=true;
    if(isCurrentabValid){
      this.formsTab.tabs[tabId].active = true;
    }
    
  }

}
