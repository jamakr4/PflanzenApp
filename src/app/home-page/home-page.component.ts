import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { QuoteComponent } from '../quote/quote.component';
import { WeatherDisplayComponent } from '../weather-display/weather-display.component';
import { Plant } from '../classes/plants';
import { PlantService } from '../services/plant.service';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [QuoteComponent, RouterLink, WeatherDisplayComponent, CommonModule, NgIf],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  plants: Plant[] = [];
  constructor(private plantService: PlantService) {

    this.plants = plantService.getOwnedPlants();
  }
}