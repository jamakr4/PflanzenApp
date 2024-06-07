import { Component } from '@angular/core';
import { Plant } from '../interface/plants';
import { ActivatedRoute } from '@angular/router';
import { PlantService } from '../services/plant.service';
import { ShopheaderComponent } from '../shopheader/shopheader.component';



@Component({
  selector: 'app-plant-detail-shop-page',
  standalone: true,
  imports: [ShopheaderComponent],
  templateUrl: './plant-detail-shop-page.component.html',
  styleUrl: './plant-detail-shop-page.component.css'
})
export class PlantDetailShopPageComponent 
{

  plant!: Plant;
  constructor(activatedRoute:ActivatedRoute, plantservice:PlantService) 
  {
    activatedRoute.params.subscribe((params) => 
      {
      this.plant = plantservice.getPlantByID(params?.['id']);
    })
  }
}
