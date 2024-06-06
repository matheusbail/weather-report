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

 /* cityAddress ="";
  getCity(){
    this.cityAddress;
    localStorage.setItem('Cidade',this.cityAddress);
  console.log(this.cityAddress);
  }*/

  constructor(private weatherService: WeatherService){}
  cityAddress ="";
  function(){
    localStorage.setItem('Cidade',this.cityAddress);
   this.weatherService.getCityData().subscribe({
     next:(data)=>{
       console.log(data)
     },
     error:(error) =>console.log(error.message),
 
     complete: ()=>console.info('API Call OK')
   })
 }




  @Input()
  hide!: boolean;
  //hideSearch = true;
  
}
