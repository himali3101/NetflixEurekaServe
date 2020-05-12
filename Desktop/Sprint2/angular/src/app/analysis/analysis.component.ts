import { Component, OnInit } from '@angular/core';
import { RealestateService } from '../realestate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  constructor(private router: Router, private service : RealestateService) { }

  ngOnInit(): void {
  }

  topBuyer(){
    this.router.navigate(['/topbuyer']);
    console.log("heyy")
  }

  locationAnalysis(){
    this.router.navigate(['/locationanalysis']);
  }

}
