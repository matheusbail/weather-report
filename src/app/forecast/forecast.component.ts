import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css',
})
export class ForecastComponent {
  cityAddress = '';
  submit: any;

  constructor(private weatherService: WeatherService) {}

  sendClick(): void {
    this.weatherService.sendUpdate(this.cityAddress);
  }

  clickto() {
    this.sendClick();
    alert('404');
  }
}
