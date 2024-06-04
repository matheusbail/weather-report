import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent{
 
  @Input()
  hide!: boolean;
  //hideSearch = true;
  
}
