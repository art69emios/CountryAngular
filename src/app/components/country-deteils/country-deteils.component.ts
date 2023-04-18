import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryDataService } from 'src/app/services/country-data.service';

@Component({
  selector: 'app-country-deteils',
  templateUrl: './country-deteils.component.html',
  styleUrls: ['./country-deteils.component.scss']
})
export class CountryDeteilsComponent implements OnInit, OnDestroy {

  constructor(private activateRouter:ActivatedRoute, private router:Router, private countryServer: CountryDataService ){}

  countryDetails: any
  countryDetailsSubscriber:any 
  countryName!:string 

  
  ngOnInit(): void {
    this.activateRouter.params.forEach(item => {
      this.countryName = item['country']
      this.countryDetailsSubscriber = this.countryServer.getCoutry(this.countryName).subscribe(data => {
        this.countryDetails = data 
      })
    })
  }


  ngOnDestroy(): void {
    if(this.countryDetailsSubscriber)  this.countryDetailsSubscriber.unsubscribe()
  }
}
