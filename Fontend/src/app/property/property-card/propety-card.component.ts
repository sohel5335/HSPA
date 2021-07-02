import { Component, Input } from "@angular/core";
import { IProperty } from "../iproperty";

@Component({

    selector:'app-property-card',
    //template:`<h1> I am property card</h1>`,
    templateUrl:`propety-card.component.html`,
    styleUrls:['propety-card.component.css']
    //styles:['h1 {font-weight:normal}']
})
export class PropertyCardComponent
{
    @Input()
    Property!: IProperty;
   
}
