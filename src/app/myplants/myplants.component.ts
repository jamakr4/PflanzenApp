import { Component } from '@angular/core';
import { Plant } from '../classes/plants';
import { PlantService } from '../services/plant.service';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';







@Component({
  selector: 'app-shop-landing-page',
  standalone: true,
  imports: [CommonModule,NgIf,],
  templateUrl: './myplants.component.html',
  styleUrl: './myplants.component.css'
})
export class MyPlantsComponent {

  plants:Plant[] = [];
  constructor(private plantService:PlantService){
    
      this.plants = plantService.getAll();
    }
   
  }



