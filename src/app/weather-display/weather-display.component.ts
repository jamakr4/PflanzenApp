import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-display',
  standalone: true,
  imports: [],
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.css'
})
export class WeatherDisplayComponent {
  temperature = "21°C";
  city = "Kamp-Lintfort";
  rainfall = "200ml";
  humidity = "100%";
  description = "Cold and Humid";
}
