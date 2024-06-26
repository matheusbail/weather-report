import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
    getCityData(){
     let cityInput = localStorage.getItem('Cidade');
     
     return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=1aec92b9eb5e7c3b0c5c89d5141406a2&units=metric`)
    
    }

   weekData(){
      const url = "http://localhost:3000/"
      console.log(url);
      return this.http.get(`${url}Dias`);
      }
      private pesquisar = new Subject<any>(); //Cria um Subject
    
        sendUpdate(city: string) { 
            this.pesquisar.next({ string: city }); 
        }
    
        getUpdate(): Observable<any> { 
            return this.pesquisar.asObservable(); 
        }


}
    