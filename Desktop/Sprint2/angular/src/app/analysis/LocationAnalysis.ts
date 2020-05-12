import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { RealestateService } from '../realestate.service';
import { Property } from '../Property';
import { User } from '../User';
import { Chart } from 'chart.js'
//import { PropertySellModel } from '../PropertyModel';
import { AnalysisModel } from '../AnalysisModel';
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


export class LocationAnalysisComponent {

    properties: PropertySellModel[];
    names : any[];

    constructor(private router: Router, private service: RealestateService, private elementRef: ElementRef) {
       
    }

  ngOnInit(){
       this.locationAnalysis();

  }
   
  
    public locationAnalysis() {
        console.log("soooo heyy there from topbuyer")
        this.service.locationAnalysis().subscribe(data => { this.properties = data
            console.log(this.properties)
            
          /* let uniqueCount = this.properties
            var count = [];
            uniqueCount.forEach(function(i) { count[i.property.getLocation] = (count[i.property.getLocation]||0) + 1;});
            console.log(count);
            console.log( typeof(count))
            var a=[]
            var data2=[]
         */
            var arr = this.properties
            var counts ={};
            console.log("This is num " +arr)
            for (var i = 0; i < arr.length; i++) {
                
              var num = arr[i].property.location
              console.log(arr[i].property.location)
           
              counts[num] = counts[num] ? counts[num] + 1 : 1;
              console.log("counts"+counts[num])
              var analysisData = new AnalysisModel(num,counts[num])
              this.service.SoldLocationAnalysis(analysisData).subscribe( data => {alert("Property added successfully.")})
              var res = [];
              for (var x in counts){
                   counts.hasOwnProperty(x) && res.push(counts[x])
              }
              console.log(res);
            
            }

            var options = {
                // All of my other bar chart option here
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        
            let data1 = {
                datasets: [{
                    data: res
                }],
            
                // These labels appear in t legend and in the tooltips when hovering different arcs
                labels: [
                    'Red',
                    'Yellow'
                ]
            };
            // let htmlRef = this.elementRef.nativeElement.querySelector(`myChart`);
            
            var myPieChart = new Chart("myChart", {
                type: 'bar',
                data:  data1,
                options: options 
            });
            
           
        
        })

        

    }
}
