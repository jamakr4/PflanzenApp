import { Routes } from '@angular/router';
import { PlantDetailShopPageComponent } from './shop-detail-page/plant-detail-shop-page.component';
import { ShopLandingPageComponent } from './shop-landing-page/shop-landing-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilComponent } from './profil/profil.component';
import { BurgermenuComponent } from './burgermenu/burgermenu.component';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

export const routes: Routes = [
    {
     path:"", component:ShopLandingPageComponent //testing only remove or replace 
    },
    {
        path:"details/:id", component:PlantDetailShopPageComponent
    },
    {
        path:"shop", component:ShopLandingPageComponent
    },
    {
        path:"shoppingcart", component:ShoppingCartComponent
    },
    {
        path:"search/:searchTerm", component:ShopLandingPageComponent
    },
    {
      path:"cart-page", component:ShoppingCartComponent
    },
    {
        path:"home", component:HomePageComponent
    },
    {
        path:"profil", component:ProfilComponent
    },
    {
        path:"menu", component:BurgermenuComponent
    }
];
