import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-weather-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent implements OnInit {
  apiKey = '439483517479c8a075beb2c8c6b11527';
  city: string = '';
  cityName: string = '';
  temperature: string = '';
  description: string = '';
  humidity: string = '';
  rainfall: string = '';
  weatherIcon: string = '';

  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object ) {
  }

  ngOnInit() {
    if (this.city === '') {
      this.city = localStorage.getItem('city') || 'kamp-lintfort';
    }
    this.getWeather();
  }

  getWeather() {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`;

    this.http.get(currentWeatherUrl).subscribe(
      (data: any) => this.displayWeather(data),
      error => {
        console.error('Error fetching current weather data:', error);
        alert('Error fetching current weather data. Please try again.');
      }
    );
  }

  displayWeather(data: any) {
    if (data.cod === '404') {
      alert(data.message);
    } else {
      this.temperature = `${Math.round(data.main.temp - 273.15)}°C`;
      this.humidity = `${data.main.humidity}%`;
      this.rainfall = data.rain && data.rain['1h'] ? `${data.rain['1h']} mm` : '0mm';
      this.description = data.weather[0].description;
      this.weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
      this.cityName = data.name;
    }
  }
}
