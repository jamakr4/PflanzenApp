import { Component } from '@angular/core';
import { Plant } from '../classes/plants';
import { ActivatedRoute } from '@angular/router';
import { PlantService } from '../services/plant.service';
import { ShopheaderComponent } from '../shopheader/shopheader.component';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plant-detail-shop-page',
  standalone: true,
  imports: [ShopheaderComponent, 
  ],
  templateUrl: './plant-detail-shop-page.component.html',
  styleUrl: './plant-detail-shop-page.component.css'
})
export class PlantDetailShopPageComponent 
{

  plant!: Plant;
  constructor(activatedRoute:ActivatedRoute, plantservice:PlantService, private cartService:CartService, private router:Router) 
  {
    activatedRoute.params.subscribe((params) => 
      {
      this.plant = plantservice.getPlantByID(params?.['id']);
    })
  }

  addToCart()
  {
    this.cartService.addToCart(this.plant);
    this.router.navigateByUrl('/cart-page');
  }
}
