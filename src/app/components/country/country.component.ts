import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CountryDataService } from 'src/app/services/country-data.service';
import { COUNTRY } from 'src/app/moduls/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  @ViewChild('regionsContainer') regionsContainerRef!: ElementRef;
  constructor(private countryService: CountryDataService ){}

  countryData: any[] = [];
  regionsImages = ['asia.jpg', 'africa.jpg', 'americas.jpg', 'europe.jpg', 'oceania.jpg'];

  ngOnInit(): void {
    const regions = ['Asia', 'Africa', 'America', 'Europe', 'Oceania'];
    regions.forEach((region) => {
      this.countryService.getCoutry(region).subscribe(data => {
        this.countryData.push(data);
        this.changesImages()  
      });
    });

  }

  
  changesImages(){
    let id:number = 0
    setInterval(()=>{
        const container = this.regionsContainerRef.nativeElement as HTMLElement;
        container.style.backgroundImage = `url(assets/${this.regionsImages[id]})`
        container.style.backgroundSize = 'cover';
        container.style.transition = 'all .5s ease'
        id++
        if(this.regionsImages.length === id) id = 0
      },4000)
  }

  onRegionHover(region: string) {
    const container = this.regionsContainerRef.nativeElement as HTMLElement;
    container.style.backgroundImage = `url(assets/${region.toLowerCase()}.jpg)`;
    container.style.backgroundSize = 'cover';
    container.style.transition = 'all .5s ease'
  }
}
