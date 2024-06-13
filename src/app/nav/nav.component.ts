import { LandPageComponent } from './../land-page/land-page.component';
import { Component,Input, ViewChild} from '@angular/core';
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


  constructor(private weatherService: WeatherService){
    
  }
  cityAddress ="";
  function(){
    localStorage.setItem('Cidade',this.cityAddress);
   this.weatherService.getCityData().subscribe({
     next:(data)=>{
       console.log(data)
       this.sendClick();
     },
     error:(error) =>console.log(error.message),
 
     complete: ()=>console.info('API Retornou Lat e Lon')
   })


 }

  @Input()
  hide!: boolean;
  //hideSearch = true;

  sendClick(): void {
    // send message to subscribers via observable subject
    this.weatherService.sendUpdate(this.cityAddress);
}


}
