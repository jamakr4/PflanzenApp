import { Component } from '@angular/core';
import { Plant } from '../classes/plants';
import { ActivatedRoute } from '@angular/router';
import { PlantService } from '../services/plant.service';
import { ShopheaderComponent } from '../shopheader/shopheader.component';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plant-detail-shop-page',
  standalone: true,
  imports: [ShopheaderComponent, NgIf, CommonModule
  ],
  templateUrl: './plant-detail-shop-page.component.html',
  styleUrl: './plant-detail-shop-page.component.css'
})
export class PlantDetailShopPageComponent 
{

  plant!: Plant;
  constructor(activatedRoute:ActivatedRoute,private plantservice:PlantService, private cartService:CartService, private router:Router) 
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
  addMyplants() {
    this.plantservice.addToMyplants(this.plant.id);
    alert('Die Pflanze wurde erfolgreich hinzugefügt');
  }

  //wishlist
  addToWishlist() {
    this.plantservice.addToWishlist(this.plant.id);
    alert('Pflanze zur Wishlist hinzugefügt');
  }
}
