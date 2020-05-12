import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RealestateService } from '../realestate.service';
import { Property } from '../Property';
import { PropertySoldComponent } from './propertySold';
import { PropertyModel } from '../PropertyModel';
import { PropertySell } from '../PropertySell';
import { Users } from '../Users';
import { PropertySellModel } from '../PropertySellModel';
import { User } from '../User';

@Component({
    selector: 'app-property',
    template: ` <form  action="">
    <div *ngIf="enabled">
    Enter User Name : <input type="text" #userName>
    Enter User EmailId : <input type="text" #emailId> 
     <button type="submit" (click) = "sold(userName.value, emailId.value)">Confirm</button>
   </div>
                 <table>
                 <tr>
                 <td><input type="search" class="search_1" placeholder="Enter budget"  #budget/>
                 <td><button type="submit" (click) = "searchByBudget(budget.value)" >Search</button>    
                </tr>
                </table>
                 </form>
                 <table border="2" *ngFor = 'let property of properties'>
                 <tr><th>Property Id  </th> <td>{{property.propertyId}}</tr>
                 <tr ><th>propertyType</th><td>{{property.propertyType}}</tr>
                 <tr><th>No. Room</th> <td>{{property.room}}</tr>
                 <tr><th>Price </th> <td>{{property.budget}}</tr>
                 <tr> <th>propertyStatus</th><td>{{property.propertyStatus}}</tr>
                 <tr><th>areaPerSq</th> <td>{{property.areaPerSq}}</tr>
                 <tr> <th>floorNo</th><td>{{property.floorNo}}</tr>
                 <tr><th>Location</th> <td>{{property.location}}</tr>
                 <tr><th>Locality</th><td>{{property.locality}}</tr>
                 <tr><th>Seller Name</th> <td>{{property.sellerName}}</tr>
                 <tr><th>Seller Email Id</th> <td>{{property.sellerEmailId}}</tr>
                 <tr><td><button type="submit" (click)="buy(property.propertyId)" >BUY</button></td></tr>
                 </table>

                
                 
                 
                 `,
    //styles :    
      
  })


  export class SearchByBudgetComponent{

    properties : PropertyModel[];
    enabled:boolean=false;
    property : PropertyModel;
    seller : Users;
    buyer : Users;
    propertySell : PropertySell;
    propertysold : PropertySellModel;
    id : number;

    constructor(private router: Router, private service : RealestateService){ }

    
    onChange(){
      
    }

    searchByBudget(budget){
        console.log("searching");
        this.service.searchByBudget(budget).subscribe( data => {this.properties = data;})
        //console.log(this.properties.forEach);
      }

      buy(propertyId){
        console.log(propertyId);
        this.enabled = true;
        this.service.searchById(propertyId).subscribe( data => {this.property = data;
          this.seller = new Users(this.property.sellerName, this.property.sellerEmailId);
          this.propertySell = new PropertySell(  this.property.propertyType, this.property.room, this.property.budget,
           this.property.propertyStatus, this.property.areaPerSq, this.property.floorNo, this.property.location, this.property.locality, this.seller );
           console.log(this.property.sellerName)
          })
       
      }

      sold(userName, emailId){
        this.buyer = new Users(userName, emailId);
        //console.log(userName)
        this.propertysold = new PropertySellModel(this.propertySell, this.seller, this.buyer);
        this.service.sold(this.propertysold).subscribe( data => {alert("property sold")});    
      }
  }