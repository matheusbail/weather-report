import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherPageComponent } from '../weather-page/weather-page.component';

@Component({
  selector: 'app-land-page',
  standalone: true,
  imports: [FormsModule, WeatherPageComponent],
  templateUrl: './land-page.component.html',
  styleUrl: './land-page.component.css'
})
export class LandPageComponent {
cityAddress="";

showCardInit=true;
showLogo=true;
showSearch=true;
public search(){
  this.showCardInit=false;
  this.showLogo=false;
  this.showSearch=false;
}
}
