import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryDataService {

  constructor(private http: HttpClient) { }

  getCoutry(region:string){
    return this.http.get(`https://restcountries.com/v3.1/region/${region}`)
  }



  getCoutryName(name:string){
    return this.http.get(`https://restcountries.com/v3.1/name/${name}`)
  }

}
