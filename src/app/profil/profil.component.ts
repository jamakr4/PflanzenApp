import { Component } from '@angular/core';
import { Plant } from '../classes/plants';
import { PlantService } from '../services/plant.service';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';



@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule, NgIf, RouterLink, RouterOutlet, NotFoundComponent],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {

  plants: Plant[] = [];
  constructor(private plantService: PlantService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm'])
        this.plants = this.plantService.getAllPlantsBySearchTerm(params['searchTerm']);
      else
        this.plants = plantService.getAll();
    })
  }

}
