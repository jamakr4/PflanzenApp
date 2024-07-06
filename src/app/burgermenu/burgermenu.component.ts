import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-burgermenu',
  standalone: true,
  templateUrl: './burgermenu.component.html',
  styleUrls: ['./burgermenu.component.css'],
  imports: [FormsModule]
})
export class BurgermenuComponent implements OnInit {
  currentMode: 'light' | 'dark' = 'light';
  city: string = '';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object 
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.currentMode = (localStorage.getItem('colorMode') as 'light' | 'dark') || 'dark';
      this.applyMode();
      this.city = localStorage.getItem('city') || 'kamp-lintfort';
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
      this.document.body.classList.remove('light-mode', 'dark-mode');
      this.document.body.classList.add(`${this.currentMode}-mode`);
    }
  }

  updateCityInLocalStorage(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('city', this.city);
    }
  }
}
