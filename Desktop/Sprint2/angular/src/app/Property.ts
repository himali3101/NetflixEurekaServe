import { User } from './User';
import { Users } from './Users';

export class Property{

propertyId : number;
propertyType : string;
room : string;
budget : number;
propertyStatus : string;
areaPerSq : string;
floorNo : number;
location : string;
locality : string;
sellerName : String;
sellerEmailId : string;

constructor( propertyType, room, budget, propertyStatus, areaPerSq, floorNo, location, locality, sellerName, sellerEmailId){
    this.propertyType = propertyType;
    this.room = room;
    this.budget = budget;
    this.propertyStatus = propertyStatus;
    this.areaPerSq = areaPerSq;
    this.floorNo = floorNo;
    this.location = location;
    this.locality = locality;
    this.sellerName = sellerName;
    this.sellerEmailId = sellerEmailId

}
       

get getLocation(): string {
    return this.location;
}

}