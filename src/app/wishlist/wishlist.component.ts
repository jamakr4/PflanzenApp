import { Component } from '@angular/core';
import { Plant } from '../classes/plants';
import { PlantService } from '../services/plant.service';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [NgIf, CommonModule,RouterLink,RouterModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

  wishlistPlants: Plant[];

  constructor(private plantService: PlantService) {
    this.wishlistPlants = this.plantService.getWishlist();
  }

  removeFromWishlist(plantId: number): void {
    this.plantService.removeFromWishlist(plantId);
    this.wishlistPlants = this.plantService.getWishlist(); // Aktualisieren der Liste nach dem Entfernen
  }
}
