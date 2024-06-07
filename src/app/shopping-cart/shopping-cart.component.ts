import { Component } from '@angular/core';
import { ShopheaderComponent } from '../shopheader/shopheader.component';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [ShopheaderComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

}
