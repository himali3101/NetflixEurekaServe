import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RealestateService } from '../realestate.service';
import { Property } from '../Property';
import { PropertySoldComponent } from './propertySold';
import { PropertyModel } from '../PropertyModel';
import { Users } from '../Users';
import { PropertySellModel } from '../PropertySellModel';
import { User } from '../User';
import { PropertySell } from '../PropertySell';

@Component({
    selector: 'app-property',
    template: `  
                <form  action="">
                <div *ngIf="enabled">
                Enter User Name : <input type="text" #userName>
                Enter User EmailId : <input type="text" #emailId> 
                 <button type="submit" (click) = "sold(userName.value, emailId.value)">Confirm</button>
                </div>
                
 
                 <table>
                 <tr>
                 <td><input type="search" class="search_1" placeholder="Enter Id"  #id/>
                 <td><button type="submit" (click) = "searchById(id.value)" >Search</button>        
                </tr>
                </table>
                 </form>
                 <table  >
                 <tr><th>Property Id  </th> <td >{{property.propertyId}}</tr>
                 <tr ><th>propertyType</th><td>{{property.propertyType}}</tr>
                 <tr><th>No. Room</th> <td>{{property.room}}</tr>
                 <tr><th>Price </th> <td>{{property.budget}}</tr>
                 <tr> <th>propertyStatus</th><td>{{property.propertyStatus}}</tr>
                 <tr><th>areaPerSq</th> <td>{{property.areaPerSq}}</tr>
                 <tr> <th>floorNo</th><td>{{property.floorNo}}</tr>
                 <tr><th>Location</th> <td>{{property.location}}</tr>
                 <tr><th>Locality</th><td>{{property.locality}}</tr>
                 <tr><th>Seller User Name</th> <td>{{property.sellerName}}</tr>
                 <tr><th>Seller Email Id</th> <td>{{property.sellerEmailId}}</tr>
                 <tr><td><button type="submit" (click)="buy(property)" >BUY</button></td></tr>
                 </table>
                  `
            
                 
                 
                ,
    //styles :
      
  })
// <tr><td><a [routerLink]="['propertysold',property]"><button>BUY</button></a></td></tr>

  export class SearchByIdComponent{

    enabled:boolean=false;
    property : PropertyModel;
    property1 : PropertyModel
    seller : Users;
    buyer : Users;
    propertySell : PropertySell;
    propertysold : PropertySellModel;

    constructor(private router: Router, private service : RealestateService){ }

    onChange(){
      
    }

    searchById(id){
        console.log("searching");
        this.service.searchById(id).subscribe( data => {this.property = data;})
        console.log(this.property);
      }

    buy(property){
      this.enabled = true;
        this.seller = new Users(this.property.sellerName, this.property.sellerEmailId);
        this.propertySell = new PropertySell(  this.property.propertyType, this.property.room, this.property.budget,
         this.property.propertyStatus, this.property.areaPerSq, this.property.floorNo, this.property.location, this.property.locality, this.seller );
        console.log(this.property.sellerName)
         // budget,propertyStatus,areaPerSq, floorNo, location, userName,emailId);      
      }

      sold(userName, emailId){
        this.buyer = new Users(userName, emailId);
        console.log(userName)
        this.propertysold = new PropertySellModel(this.propertySell, this.seller, this.buyer);
        this.service.sold(this.propertysold).subscribe( data => {alert("property sold")});    
      }

  }