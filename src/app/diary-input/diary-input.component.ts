import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diary-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './diary-input.component.html',
  styleUrls: ['./diary-input.component.css']
})
export class DiaryInputComponent implements OnInit {
  entry: any = { pflanze: 'custom' }; // Set default to 'custom'
  plantOptions: string[] = [];
  customPlantName: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    const entries: any[] = JSON.parse(localStorage.getItem('entries') || '[]');
    const allPlants = entries.map(entry => entry.pflanze);
    const uniquePlantsSet = new Set(allPlants);
    this.plantOptions = [...Array.from(uniquePlantsSet)];
  }

  onPlantChange(event: any): void {
    if (event.target.value !== 'custom') {
      this.customPlantName = '';
    }
  }

  saveData() {
    const timestamp = new Date().getTime(); 

    const entryWithId = {
      id: timestamp,
      header: this.entry.header,
      pflanze: this.entry.pflanze === 'custom' ? this.customPlantName : this.entry.pflanze,
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