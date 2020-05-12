import { Property } from './Property';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { User } from './User';
import { PropertyModel } from './PropertyModel';

export class PropertySellModel{

    property : PropertyModel;
    
    seller : User;

    buyer : User;

    constructor(property, seller, buyer){
        this.property = property
        this.seller = seller 
        this.buyer = buyer
    }
}