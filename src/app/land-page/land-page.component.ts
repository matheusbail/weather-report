import { Component } from '@angular/core';

@Component({
  selector: 'app-land-page',
  standalone: true,
  imports: [],
  templateUrl: './land-page.component.html',
  styleUrl: './land-page.component.css'
})
export class LandPageComponent {
showCardInit=true;
showLogo=true;
showSearch=true;
public search(){
  this.showCardInit=false;
  this.showLogo=false;
  this.showSearch=false;
}
}
