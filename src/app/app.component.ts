import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import{LandPageComponent} from './land-page/land-page.component'
import { MapComponent } from './map/map.component';
import { WeekComponent } from './week/week.component';
import { HttpClientModule } from '@angular/common/http';
import { ForecastComponent } from './forecast/forecast.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent,LandPageComponent,MapComponent,WeekComponent,HttpClientModule,ForecastComponent, RouterModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-report';
  hidden = true;  
  hideWeek = true;

 
  receiveClick($event){
  this.receiveClick = $event
  this.hidden = false;
}

}

