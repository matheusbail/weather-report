import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import{LandPageComponent} from './land-page/land-page.component'
import { MapComponent } from './map/map.component';
import { WeekComponent } from './week/week.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent,LandPageComponent,MapComponent,WeekComponent], 
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
