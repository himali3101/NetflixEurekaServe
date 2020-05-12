import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RealestateService } from '../realestate.service';
import { Profile } from '../Profile';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  profiles : Profile[]

  constructor( private router: Router, private service : RealestateService    ) { }

  ngOnInit(): void {
  }

  viewProfile(){
  
    this.service.viewProfile().subscribe( data => { this.profiles = data; } )
  }

}
