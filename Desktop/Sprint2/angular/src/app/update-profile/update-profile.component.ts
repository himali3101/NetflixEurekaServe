import { Component, OnInit } from '@angular/core';
import { RealestateService } from '../realestate.service';
import { Router } from '@angular/router';
import { Profile } from '../Profile';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  user : Profile;
  constructor(  private router: Router, private service : RealestateService) { }

  ngOnInit(): void {
  }

  public updateProfile(userId, userName, emailId, phoneNo){
    this.user = new Profile(userId, userName, emailId, phoneNo);
    this.service.updateProfile(this.user).subscribe( date => {alert("User updates successfully.")});
  }

}
