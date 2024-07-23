import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Plant } from '../classes/plants';
import { CommonModule } from '@angular/common';
import { PlantService } from '../services/plant.service';

@Component({
  selector: 'app-myplants-add',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './myplants-add.component.html',
  styleUrl: './myplants-add.component.css'
})
export class MyplantsAddComponent {
  plants:Plant[] = [];
  constructor(private plantService:PlantService){
    this.plants = this.plantService.getAll();
  }

  addPlant(id: number){
    this.plantService.addToMyplants(id);
    alert('Die Pflanze wurde erfolgreich hinzugefügt');
  }
}
