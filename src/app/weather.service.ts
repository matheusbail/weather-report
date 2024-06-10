import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDado } from './IDados';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
    getCityData(){
     let cityInput = localStorage.getItem('Cidade');

     return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=1aec92b9eb5e7c3b0c5c89d5141406a2&units=metric`)
    
    }
    }
    