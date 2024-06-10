import { Component } from '@angular/core';
import { ShopheaderComponent } from '../shopheader/shopheader.component';
import { Plant } from '../classes/plants';
import { PlantService } from '../services/plant.service';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CarouselComponent } from '../carousel/carousel.component';



@Component({
  selector: 'app-shop-landing-page',
  standalone: true,
  imports: [ShopheaderComponent,CommonModule,NgIf,RouterLink, RouterOutlet, CarouselComponent],
  templateUrl: './shop-landing-page.component.html',
  styleUrl: './shop-landing-page.component.css'
})
export class ShopLandingPageComponent {

  plants:Plant[] = [];
  constructor(private plantService:PlantService, activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params) => {
      if(params['searchTerm'])
        this.plants = this.plantService.getAllPlantsBySearchTerm(params['searchTerm']);
      else
      this.plants = plantService.getAll();
    })
   
  }
//Add Slides for the Caroussel
  images = [
    {name: '/ Dracaena_sanderiana1.png'},
    {name: '/ Dracaena_sanderiana2.png'},
    {name: '/ Dracaena_sanderiana3.png'}

  ]
}import { from } from 'rxjs';

