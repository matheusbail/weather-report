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
  currentDay ="";
  city ="";
  temp ="";
  environment="";
  last="";
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

constructor(private weatherService: WeatherService)
{
  let search = localStorage.getItem('Cidade');
  console.log(search)
  let xd = search!.toString()
  this.last = xd;
}
cityAddress ="";
 function(){
  localStorage.setItem('Cidade',this.cityAddress);
  this.weatherService.getCityData().subscribe({
    next:(data)=>{
    console.log(data)
   
     let dataString = JSON.stringify(data); 
     localStorage.setItem('obj',dataString)
     this.Display(data)
     
     
    },
    error:(error) =>console.log(error.message),
    complete: ()=>console.info('API Retornou Dados Da Cidade')
  })
 
}

 Display(weather){
  //let cidade = weather.main.temp;
  let temperature = weather.main.temp;
  let cidade = weather.name;
  let environmentStatus = weather.main.temp_max  
  this.environment = environmentStatus;
  this.temp = temperature
  this.city = cidade
  console.log(cidade)
  console.log(temperature)
  console.log(environmentStatus);

} 

}

