import { Component,Input } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-week',
  standalone: true,
  imports: [],
  templateUrl: './week.component.html',
  styleUrl: './week.component.css'
})
export class WeekComponent {
  

  @Input()
  hideWeek!: boolean;


  constructor(private weatherService: WeatherService)
  {
    this.getWeekData();
  }
  dayOne = "";
  dayTwo="";
  dayThree="";
  dayFour="";
  dayFive="";

  tempOne="";
  tempTwo="";
  tempThree="";
  tempFour="";
  tempFive="";

  getWeekData(){
    this.weatherService.weekData().subscribe({
      next:(data)=>{
        console.log(data[0].nome)
       this.dayOne = data[0].nome
       this.dayTwo = data[1].nome
       this.dayThree = data[2].nome
       this.dayFour = data[3].nome
       this.dayFive = data[4].nome
      this.tempOne = data[0].Temp
      this.tempTwo = data[1].Temp
      this.tempThree = data[2].Temp
      this.tempFour = data[3].Temp
      this.tempFive = data[4].Temp
      }
    })
  }

  
}
