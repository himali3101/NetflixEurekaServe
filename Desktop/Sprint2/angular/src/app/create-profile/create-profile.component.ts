import { Component, OnInit } from '@angular/core';
import { Profile } from '../Profile';
import { RealestateService } from '../realestate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  profile : Profile;

  constructor(private router: Router, private service : RealestateService) { }

  ngOnInit(): void {
  }

  createProfile(userName, emailId, phoneNo ){
    const userId = 0;
    this.profile = new Profile(userId, userName, emailId, phoneNo);
    this.service.createProfile(this.profile).subscribe( data => { this.profile = data; alert("User created successfully.User Id ="+ this.profile.userId );   });
  }
}
