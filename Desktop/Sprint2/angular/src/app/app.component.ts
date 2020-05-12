import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RealestateService } from './realestate.service';
import { Property } from './Property';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RealEstateUi';

  properties : Property[];
  property : Property;

  constructor(private router: Router, private service : RealestateService,public http: HttpClient){ }

  ngOnInit(){
   // this.router.navigate(['/login']);
  }

  searchById(propertyId){
    this.service.searchById(propertyId).subscribe( data => {this.property = data;})
  }

  
  

  
  searchByType(propertyType){
    this.service.searchByType(propertyType).subscribe( data => {this.properties = data;})
  }

  
  searchByBudget(budget){
    this.service.searchByBudget(budget).subscribe( data => {this.properties = data;})
  }



}
