import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDado } from './IDados';
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

      private pesquisar = new Subject<any>(); //need to create a subject
    
        sendUpdate(city: string) { //the component that wants to update something, calls this fn
            this.pesquisar.next({ string: city }); //next() will feed the value in Subject
        }
    
        getUpdate(): Observable<any> { //the receiver component calls this function 
            return this.pesquisar.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
        }


}
    