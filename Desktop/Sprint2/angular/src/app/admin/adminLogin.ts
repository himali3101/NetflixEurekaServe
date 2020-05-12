import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RealestateService } from '../realestate.service';

@Component({
    selector: 'app-property',
    template: `Admin Name : <input type="text" #username  > 
    <br><br>
    password : <input type="password" #password >
    <br><br>    
    <input type="submit" (click) = "login(username.value, password.value) " >
    <br>
    
    `
})

export class AdminLoginComponent{

    constructor(private router: Router, private service : RealestateService){ }

    login(username, password){

              if( username == "admin" && password == "admin"){
              this.router.navigate(['/admin']);
            }
            else{
              this.router.navigate(['/login']);  
            }
    }

}