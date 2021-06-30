import { Component } from "@angular/core";

@Component({

    selector:'app-property-card',
    //template:`<h1> I am property card</h1>`,
    templateUrl:`propety-card.component.html`,
    styleUrls:['propety-card.component.css']
    //styles:['h1 {font-weight:normal}']
})
export class PropertyCardComponent
{
    Property:any=
    {
        "Id":1,
        "Name":"Ali House",
        "Type":"House",
        "Price":12000
    }
}
