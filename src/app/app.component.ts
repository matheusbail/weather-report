import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import{LandPageComponent} from './land-page/land-page.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent,LandPageComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-report';
  hidden = true

receiveClick($event){
  this.receiveClick = $event
  this.hidden = false;
}

}
