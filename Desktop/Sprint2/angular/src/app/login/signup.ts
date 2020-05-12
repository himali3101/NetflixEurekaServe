import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RealestateService } from '../realestate.service';
import { Property } from '../Property';
import { SignUpModel } from './signUpModel';

@Component({
    selector: 'app-property',
    template: `
    <div  >
    <p class="thick">
    Sign-Up<br>
    UserName :<input type="text" #userName><br>
    Password : <input type="text" #password><br>
    User Type : <input type="text" #userType><br>
    
    
    <input class="button" type="submit" (click) = "signup(userName.value, password.value, userType.value)">
    </div>`,
    styles : [ `input {
        width: 30%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border: none;
        border-bottom: 2px solid red;
      }
      p.thick {
        font-weight: bold;
      }
      p{
         text-align: center;
         
      }
    
      .button {
          background-color: #333;
          color: white;
        } `
    ]

})

export class SignupComponent{

    signUpModel :SignUpModel;
    constructor(private router: Router, private service : RealestateService){ }

    signup(userName, password, userType){
        this.signUpModel = new SignUpModel(userName, password, userType);
        console.log("su")
        this.service.signup(this.signUpModel).subscribe(data => {alert("signup done")});
    }



}