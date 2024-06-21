import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  submit: any;

  constructor(private weatherService: WeatherService) {}
  cityAddress = '';
  function() {
    localStorage.setItem('Cidade', this.cityAddress);
    this.weatherService.getCityData().subscribe({
      next: (data) => {
        console.log(data);
        this.sendClick();
      },
      error: (error) => {
        window.location.reload();
        alert(
          'Por Favor, cheque se o nome da cidade foi digitado corretamente'
        );
      },

      complete: () => console.info('API Retornou Lat e Lon'),
    });
  }

  @Input()
  hide!: boolean;

  sendClick(): void {
    this.weatherService.sendUpdate(this.cityAddress);
  }
}
