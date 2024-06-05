import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
    getTemp(){
      return this.http.get('https://api.openweathermap.org/geo/1.0/direct?q=Guarapuava,PR,BR&limit=1&appid=1aec92b9eb5e7c3b0c5c89d5141406a2');
    }
  
}
