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
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MyplantsMainComponent } from './myplants-main/myplants-main.component';
import { MyplantsDetailComponent} from './myplants-detail/myplants-detail.component';
import { MyplantsDescriptionComponent } from './myplants-description/myplants-description.component';
import { LoginComponent} from './login/login.component'
import { PreloginComponent } from './prelogin/prelogin.component';
import { RegistrationComponent } from './registration/registration.component';


export const routes: Routes = [
    {
        path: "", component: PreloginComponent
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

    },
    {
        path: "myplants-detail/:id", component: MyplantsDetailComponent
    },
    {
        path:"myplants-description/:id", component: MyplantsDescriptionComponent

    },
    {
        path: "login", component: LoginComponent
    },
    {
        path: "prelogin", component: PreloginComponent
    },
    {
        path: "registration", component: RegistrationComponent
    }
];
