import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ShopLandingPageComponent } from './shop-landing-page/shop-landing-page.component';
import { PlantDetailShopPageComponent } from './shop-detail-page/plant-detail-shop-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ShopLandingPageComponent,PlantDetailShopPageComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PflanzenApp';
}
