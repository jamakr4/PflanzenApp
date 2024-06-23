import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ShopLandingPageComponent } from './shop-landing-page/shop-landing-page.component';
import { PlantDetailShopPageComponent } from './shop-detail-page/plant-detail-shop-page.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { BackgroundimageComponent } from './backgroundimage/backgroundimage.component';
import { HeaderComponent } from './header/header.component';
import { Router} from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    RouterOutlet,
    ShopLandingPageComponent,
    PlantDetailShopPageComponent,
    RouterLink,
    TaskbarComponent,
    BackgroundimageComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentMode: 'light' | 'dark' = 'light';

  //Überprüfe ob Login-, Register- oder Pre-Login- Seite oder nicht
  constructor(private router: Router){}
  isAuthPage(): boolean{
    return ['/login', '/registration', '/prelogin','/'].includes(this.router.url);
  }

  auth = true;

  ngOnInit(): void {
    // Initialisiere den Modus aus dem LocalStorage
    this.currentMode = (localStorage.getItem('colorMode') as 'light' | 'dark') || 'dark';
    this.applyMode();
  }

  setMode(mode: 'light' | 'dark'): void {
    this.currentMode = mode;
    localStorage.setItem('colorMode', mode);
    this.applyMode();
  }

  applyMode(): void {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(`${this.currentMode}-mode`);
  }

  title = "PflanzenApp";
}
