import { WeatherService } from './../weather.service';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { DatePipe, DecimalPipe } from '@angular/common';



@Component({
  selector: 'app-land-page',
  standalone: true,
  imports: [FormsModule,NavComponent,HttpClientModule,DatePipe,DecimalPipe],
  templateUrl: './land-page.component.html',
  styleUrl: './land-page.component.css'
  
})

export class LandPageComponent {
  today: number = Date.now();
  showCardInit=true;
  showLogo=true;
  showSearch=true;
  showWeek=false;
  showMap=false;
  showToday=false;
  submit: any;
 
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
  ic="";

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

        this.subscriptionName= weatherService.getUpdate().subscribe
             (emitt => {
             this.receivedValue = emitt;
             console.log(emitt.string)
             let temp = emitt.string;
                localStorage.setItem('Cidade',this.cityAddress = temp);
                this.function();
             });

  
}
cityAddress ="";
 function(){
  localStorage.setItem('Cidade',this.cityAddress);
  this.weatherService.getCityData().subscribe({
    next:(data)=>{
    console.log(data)
     let dataString = JSON.stringify(data); 
     localStorage.setItem('obj',dataString)
      this.Display(data);
   
    },
    error:(error) =>{window.location.reload();
      alert("Por Favor, cheque se o nome da cidade foi digitado corretamente")
    },
    complete: ()=>console.info('API Retornou Dados Da Cidade')
  })
 
}
 Display(weather){
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
         receivedValue: any;
         private subscriptionName: Subscription;

     
   

 



}
