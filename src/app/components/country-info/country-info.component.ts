import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryDataService } from 'src/app/services/country-data.service';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent implements OnInit, OnDestroy {

  constructor(private activatedRouter:ActivatedRoute, private router: Router, private coutryService: CountryDataService){}

  countryInfo!:string
  countryDetailsSubscriber:any 
  countryInfoDetails:any


  ngOnInit(): void {
    this.activatedRouter.params.forEach(item => {
      this.countryInfo = item['info']
     this.countryDetailsSubscriber = this.coutryService.getCoutryName(this.countryInfo).subscribe(data =>{
        this.countryInfoDetails = data
        console.log(this.countryInfoDetails);
      })
    })
  }

  ngOnDestroy(): void {
    if(this.countryDetailsSubscriber)  this.countryDetailsSubscriber.unsubscribe()
    
  }

}
