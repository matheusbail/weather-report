import { formatDate } from '@angular/common';
import { LandPageComponent } from './../land-page/land-page.component';
import { Component} from '@angular/core';


@Component({
  selector: 'app-weather-page',
  standalone: true,
  imports: [LandPageComponent],
  templateUrl: './weather-page.component.html',
  styleUrl: './weather-page.component.css'
})

export class WeatherPageComponent {
  showWeek=true;
  showMap=true;
  showToday=true;

  currentDay ="XD";

  cityAddress: string;
  constructor(){
    this.cityAddress = "";
  }


}
