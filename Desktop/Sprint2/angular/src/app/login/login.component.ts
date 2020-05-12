import { Component, OnInit } from '@angular/core';
import { RealestateService } from '../realestate.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Location} from '@angular/common';
import { AuthenticationService, AlertService } from '../_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  value : boolean;
  returnUrl: string;  // addd
  loading = false;   // added 

  constructor(private router: Router,
     private service : RealestateService,
    private location: Location,
    private authenticationService: AuthenticationService, 
    private alertService: AlertService  ) { }

  ngOnInit(): void {
  }

  login(username : string, password : string){
    console.log("inside login");
  
    this.authenticationService.login(username, password)
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate(['/user']);
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });



   /* if( userType == "User"){
    this.service.login(userName, password).subscribe( data => {( this.value = data )} ); 
    console.log(this.value);
  
     
      if(this.value == true  )
      {  
          console.log(this.value)  
          this.router.navigate(['/user']);
      }  
      else  
      {  
        this.router.navigate(['/login']);  
      }  
    }
    if( userType == "Admin"){

      if( userName == "admin" && password == "admin"){
      this.router.navigate(['/admin']);
    }
    else{
      this.router.navigate(['/login']);  
    }
  }*/

}

}
