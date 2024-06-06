import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavComponent } from './nav/nav.component';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
    
    cityInput = localStorage.getItem('Cidade');
    estateInput = "PR";
    countryInput = "BR";
    
    getCityData(){
      return this.http.get(`https://api.openweathermap.org/geo/1.0/direct?q=${this.cityInput},${this.estateInput},${this.countryInput}&limit=1&appid=1aec92b9eb5e7c3b0c5c89d5141406a2`)
     
    } 

}
