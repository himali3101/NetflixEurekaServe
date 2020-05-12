import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { RealestateService } from '../realestate.service';
import { Property } from '../Property';
import { User } from '../User';
import { Chart } from 'chart.js'
//import { PropertySell } from '../PropertyModel';
import { PropertySellModel } from '../PropertySellModel';

@Component({
    selector: 'app-property',
    template: `<div id="divChart">
                    <canvas id="myChart" ></canvas>
                </div>
                
               
                `
/*    styles : [`#divChart{
                display : block;
                width : 400px;
                height : 400px
    }`]
*/
})


export class TopBuyerComponent {

    buyers: PropertySellModel[];
    names : any[];

    constructor(private router: Router, private service: RealestateService, private elementRef: ElementRef) {
       
    }

  ngOnInit(){
      
  }
   
  
   
}
