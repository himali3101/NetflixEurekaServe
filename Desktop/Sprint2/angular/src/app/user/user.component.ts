import { Component, OnInit } from '@angular/core';
import { Property } from '../Property';
import { Router } from '@angular/router';
import { RealestateService } from '../realestate.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  properties : Property[];
  property : Property;

  constructor(private router: Router, private service : RealestateService) { }

  ngOnInit(): void {
  }

  
  
}
