import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-land-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './land-page.component.html',
  styleUrl: './land-page.component.css'
})
export class LandPageComponent {
cityAddress="";

showCardInit=true;
showLogo=true;
showSearch=true;
  showWeek=false;
  showMap=false;
  showToday=false;

public search(){
  this.showCardInit=false;
  this.showLogo=false;
  this.showSearch=false;
}
  currentDay ="XD";
onButtonClick(){
  this.showWeek=true;
  this.showMap=true;
  this.showToday=true;
}
}
