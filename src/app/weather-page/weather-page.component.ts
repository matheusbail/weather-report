import { Component } from '@angular/core';
import { LandPageComponent } from '../land-page/land-page.component';

@Component({
  selector: 'app-weather-page',
  standalone: true,
  imports: [LandPageComponent],
  templateUrl: './weather-page.component.html',
  styleUrl: './weather-page.component.css'
})
export class WeatherPageComponent {
  showWeek=true;
  cityAddress: string;
  constructor(){
    this.cityAddress = "";
  }
}
