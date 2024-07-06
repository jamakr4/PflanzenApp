import { Component } from '@angular/core';
import { Plant } from '../classes/plants';
import { PlantService } from '../services/plant.service';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

  

}
