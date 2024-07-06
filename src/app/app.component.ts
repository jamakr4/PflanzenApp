import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ShopLandingPageComponent } from './shop-landing-page/shop-landing-page.component';
import { PlantDetailShopPageComponent } from './shop-detail-page/plant-detail-shop-page.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { BackgroundimageComponent } from './backgroundimage/backgroundimage.component';
import { HeaderComponent } from './header/header.component';
import { QuizLandingPageComponent } from './quiz-landing-page/quiz-landing-page.component';
import { CommonModule, NgIf, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    CommonModule,
    RouterOutlet,
    ShopLandingPageComponent,
    PlantDetailShopPageComponent,
    RouterLink,
    TaskbarComponent,
    BackgroundimageComponent,
    HeaderComponent,
    QuizLandingPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentMode: 'light' | 'dark' = 'light';

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  isAuthPage(): boolean {
    return ['/login', '/registration', '/prelogin', '/'].includes(this.router.url);
  }

  auth = true;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.currentMode = (localStorage.getItem('colorMode') as 'light' | 'dark') || 'dark';
      this.applyMode();
    }
  }

  setMode(mode: 'light' | 'dark'): void {
    this.currentMode = mode;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('colorMode', mode);
    }
    this.applyMode();
  }

  applyMode(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('light-mode', 'dark-mode');
      document.body.classList.add(`${this.currentMode}-mode`);
    }
  }

  title = 'PflanzenApp';
}
