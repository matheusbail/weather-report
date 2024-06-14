import { Component } from '@angular/core';
import { LandPageComponent } from '../land-page/land-page.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css'
})
export class ForecastComponent {

cityAddress="";
submit: any;

clickto(){
 alert("404")
}
}
