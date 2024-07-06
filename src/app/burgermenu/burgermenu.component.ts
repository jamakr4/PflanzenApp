import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-burgermenu',
  standalone: true,
  templateUrl: './burgermenu.component.html',
  styleUrls: ['./burgermenu.component.css'] // Fixed typo here
})
export class BurgermenuComponent implements OnInit {
  currentMode: 'light' | 'dark' = 'light';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object // Inject PLATFORM_ID to check platform
  ) {}

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
      this.document.body.classList.remove('light-mode', 'dark-mode');
      this.document.body.classList.add(`${this.currentMode}-mode`);
    }
  }
}
