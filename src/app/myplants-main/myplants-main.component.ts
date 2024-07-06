import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Plant } from '../classes/plants';
import { PlantService } from '../services/plant.service';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-myplants-main',
  standalone: true,
  imports: [RouterLink, NgIf, CommonModule],
  templateUrl: './myplants-main.component.html',
  styleUrl: './myplants-main.component.css'
})
export class MyplantsMainComponent{
  plants:Plant[] = [];
  constructor(private plantService:PlantService){
    
      this.plants = plantService.getOwnedPlants();
    }
}
