import { Component, ElementRef,ViewChild,NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet,Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diary-input',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet,FormsModule],
  templateUrl: './diary-input.component.html',
  styleUrl: './diary-input.component.css'
})
export class DiaryInputComponent {
  entry: any = {};

  constructor(private router: Router) { }

  saveData() {
    const timestamp = new Date().getTime(); 

    
    const entryWithId = {
      id: timestamp,
      header: this.entry.header,
      pflanze: this.entry.pflanze,
      text: this.entry.text
    };

    
    let entries: any[] = JSON.parse(localStorage.getItem('entries') || '[]');
    entries.push(entryWithId);
    localStorage.setItem('entries', JSON.stringify(entries));

    
    this.router.navigate(['/diary-index-component']);
  }

  
  clearLocalStorage() {
    localStorage.clear();
    
  }
}