import { WeatherService } from './../weather.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../nav/nav.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-land-page',
  standalone: true,
  imports: [FormsModule,NavComponent,HttpClientModule],
  templateUrl: './land-page.component.html',
  styleUrl: './land-page.component.css'
})
export class LandPageComponent {
/*cityAddress="";
getCity(){
  this.cityAddress;
  localStorage.setItem("Cidade",this.cityAddress);
  console.log(this.cityAddress);
}*/

constructor(private weatherService: WeatherService){}
cityAddress ="";
 function(){
  localStorage.setItem("Cidade",this.cityAddress);
  this.weatherService.getCityData().subscribe({
    next:(data)=>{
      console.log(data)
    },
    error:(error) =>console.log(error.message),

    complete: ()=>console.info('API Call OK')
  })
}

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


@Output() buttonClick = new EventEmitter<boolean>();
  
  buttonClicked: boolean = true;

  clicker(){
    this.buttonClicked = true;
   this.buttonClick.emit(this.buttonClicked)
  }
}

