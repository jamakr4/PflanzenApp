import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet,Router } from '@angular/router';
@Component({
  selector: 'app-diary-index',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet,CommonModule,FormsModule],
  templateUrl: './diary-index.component.html',
  styleUrl: './diary-index.component.css'
})
export class DiaryIndexComponent implements OnInit {
  entries: any[] = [];
  plantOptions: string[] = [];
  selectedPlant: string = 'alle'; 
  filteredEntries: any[] = []; 
 
  constructor() { }

  ngOnInit(): void {
    
    this.entries = JSON.parse(localStorage.getItem('entries') || '[]');

    
    const allPlants = this.entries.map(entry => entry.pflanze);
    const uniquePlantsSet = new Set(allPlants);
    this.plantOptions = [ ...Array.from(uniquePlantsSet)];
    
  
    this.filterEntries();
  }

 
  filterEntries(): void {
    if (this.selectedPlant === 'alle') {
      this.filteredEntries = this.entries; 
    } else {
      this.filteredEntries = this.entries.filter(entry => entry.pflanze === this.selectedPlant);
    }
  }
  confirmDelete(entry: any): void {
    if (confirm('Möchten Sie diesen Eintrag wirklich löschen?')) {
     
      const index = this.entries.indexOf(entry);
      if (index !== -1) {
        this.entries.splice(index, 1);
        
        this.filterEntries();
      
        localStorage.setItem('entries', JSON.stringify(this.entries));
      }
    }
  }

  
}