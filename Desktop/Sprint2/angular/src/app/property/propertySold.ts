import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RealestateService } from '../realestate.service';
import { Users } from '../Users';
import { PropertyModel } from '../PropertyModel';
import { PropertySellModel } from '../PropertySellModel';

@Component({
    selector: 'property-sold',
    template: ` <tr><th>Enter User Name</th> <td><input type="text" #userName></tr>
    <tr><th>Enter Email Id</th> <td><input type= "text" #emailId></tr>
    <tr><td>< input type="submit"  (click) = "sold( userName.value, emailId.value)">`
})

export class PropertySoldComponent{

      property : PropertyModel;
     seller : Users;
    buyer : Users;
    propertysold : PropertySellModel;


    constructor(private route :ActivatedRoute ,private router: Router, private service : RealestateService){ 
        this.property = route.snapshot.queryParams.get("property");
        this.seller = new Users(this.property.sellerName, this.property.sellerEmailId);
    }

   

    sold( userName, emailId){
        this.buyer = new Users(userName, emailId);

        this.propertysold = new PropertySellModel(this.property, this.seller, this.buyer);
        this.service.sold(this.propertysold)

    }

}