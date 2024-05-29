import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import{LandPageComponent} from './land-page/land-page.component'
import{WeatherPageComponent} from './weather-page/weather-page.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent,LandPageComponent,WeatherPageComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-report';
}
