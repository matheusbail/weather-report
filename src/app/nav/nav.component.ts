import { LandPageComponent } from './../land-page/land-page.component';
import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent{

  city ="";
  temp ="";
  environment="";

  constructor(private weatherService: WeatherService){}
  cityAddress ="";
  function(){
    localStorage.setItem('Cidade',this.cityAddress);
   this.weatherService.getCityData().subscribe({
     next:(data)=>{
       console.log(data)
       this.Display(data)
       
     },
     error:(error) =>console.log(error.message),
 
     complete: ()=>console.info('API Retornou Lat e Lon')
   })
 }

  @Input()
  hide!: boolean;
  //hideSearch = true;

  Display(weather){
    let temperature = weather.main.temp;
    let cidade = weather.name;
    let environmentStatus = weather.main.temp_max  
    this.environment = environmentStatus;
    this.temp = temperature
    this.city = cidade
    console.log(cidade)
    console.log(temperature)
    console.log(environmentStatus);







  
}
}


