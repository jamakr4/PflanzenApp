import { Routes } from '@angular/router';
import { PlantDetailShopPageComponent } from './shop-detail-page/plant-detail-shop-page.component';
import { ShopLandingPageComponent } from './shop-landing-page/shop-landing-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilComponent } from './profil/profil.component';
import { BurgermenuComponent } from './burgermenu/burgermenu.component';
import { DiaryChangeComponent } from './diary-change/diary-change.component';
import { DiaryIndexComponent } from './diary-index/diary-index.component';
import { DiaryInputComponent } from './diary-input/diary-input.component';
import { MyPlantsComponent } from './myplants/myplants.component';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MyplantsMainComponent } from './myplants-main/myplants-main.component';

export const routes: Routes = [
    {
        path: "", component: HomePageComponent
    },
    {
        path: "details/:id", component: PlantDetailShopPageComponent
    },
    {
        path: "shop", component: ShopLandingPageComponent
    },
    {
        path: "shoppingcart", component: ShoppingCartComponent
    },
    {
        path: "search/:searchTerm", component: ShopLandingPageComponent
    },
    {
        path: "cart-page", component: ShoppingCartComponent
    },
    {
        path: "home", component: HomePageComponent
    },
    {
        path: "profil", component: ProfilComponent
    },
    {
        path: "menu", component: BurgermenuComponent
    },
    {
        path: "diary-change-component/:id", component: DiaryChangeComponent
    },
    {
        path: "diary-input-component", component: DiaryInputComponent
    },
    {

        path: "diary-index-component", component: DiaryIndexComponent
    },
    {
        path: "myplants", component: MyplantsMainComponent

    }
];
