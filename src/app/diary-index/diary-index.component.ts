import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DiaryEntryComponent } from '../diary-entry/diary-entry.component';

@Component({
  selector: 'app-diary-index',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule, FormsModule, DiaryEntryComponent],
  templateUrl: './diary-index.component.html',
  styleUrls: ['./diary-index.component.css']
})
export class DiaryIndexComponent implements OnInit {
  entries: any[] = [];
  plantOptions: string[] = [];
  selectedPlant: string = 'alle';
  filteredEntries: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.entries = JSON.parse(localStorage.getItem('entries') || '[]');
    const allPlants = this.entries.map(entry => entry.pflanze);
    const uniquePlantsSet = new Set(allPlants);
    this.plantOptions = [...Array.from(uniquePlantsSet)];
    this.filterEntries();
  }

  filterEntries(): void {
    if (this.selectedPlant === 'alle') {
      this.filteredEntries = this.entries;
    } else {
      this.filteredEntries = this.entries.filter(entry => entry.pflanze === this.selectedPlant);
    }
  }

  onDeleteEntry(entry: any): void {
    const confirmation = confirm('Are you sure you want to delete this entry?');
    if (confirmation) {
      const index = this.entries.indexOf(entry);
      if (index !== -1) {
        this.entries.splice(index, 1);
        this.filterEntries();
        localStorage.setItem('entries', JSON.stringify(this.entries));
      }
    }
  }
}