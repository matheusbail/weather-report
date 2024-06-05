import { Component,Input } from '@angular/core';

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
  //hideSearch = true;
  
}
