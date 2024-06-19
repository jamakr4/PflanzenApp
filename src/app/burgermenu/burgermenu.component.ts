import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burgermenu',
  standalone: true,
  imports: [],
  templateUrl: './burgermenu.component.html',
  styleUrl: './burgermenu.component.css'
})
export class BurgermenuComponent implements OnInit{
  currentMode: 'light' | 'dark' = 'light';

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
}
