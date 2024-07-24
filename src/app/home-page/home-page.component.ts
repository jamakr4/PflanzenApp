import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { QuoteComponent } from '../quote/quote.component';
import { WeatherDisplayComponent } from '../weather-display/weather-display.component';
import { Plant } from '../classes/plants';
import { PlantService } from '../services/plant.service';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { ApplicationRef } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [QuoteComponent, RouterLink, WeatherDisplayComponent, CommonModule, NgIf],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  plants: Plant[] = [];
  pinnedPlants: Plant[] = [];

  constructor(private plantService: PlantService, private applicationRef: ApplicationRef) {
    this.plants = plantService.getOwnedPlants();
  }

  ngOnInit(): void {
    this.plants = this.plantService.getOwnedPlants();
    this.pinnedPlants = this.plants.filter(plant => plant.pinned);
    this.pinnedPlants.forEach(plant => this.updatePinnedPlant(plant));
    this.applicationRef.isStable.pipe(first((isStable: boolean) => isStable)).subscribe(() => {
      setInterval(() => this.checkWatering(), 1000);
    });
  }

  daysIntoYear(date: Date): number {
    return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
  }

  updatePinnedPlant(plant: Plant): void {
    const currentTime = new Date();
    plant.waterTime = new Date(currentTime.getTime() + plant.timeBetweenSessions * 60 * 1000);
    
    
  }

  checkWatering(): void {
    const currentTime = new Date();
    this.pinnedPlants.forEach(plant => {
      let timeTillWater = plant.waterTime.getTime() - currentTime.getTime();
       plant.days = Math.floor(timeTillWater / (24 * 60 * 60 * 1000));
       plant.hours = Math.floor((timeTillWater % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
       plant.minutes = Math.floor((timeTillWater % (60 * 60 * 1000)) / (60 * 1000));
       plant.seconds = Math.floor((timeTillWater % (60 * 1000)) / 1000);

      let multiplier = 1;
      switch (plant.maintenance) {
        case 'Monthly':
          multiplier = 30;
          break;
        case 'Weekly':
          multiplier = 7;
          break;
        case 'Medium':
        case 'Daily':
        default:
          multiplier = 1;
      }

      plant.wateramount = plant.water * multiplier;

      

      if (timeTillWater <= 0) {

        console.log("Gießen")
      
       
      }
      
    });
  }
}