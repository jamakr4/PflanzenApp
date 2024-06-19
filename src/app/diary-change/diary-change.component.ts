import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-diary-change',
  standalone: true,
  imports: [RouterOutlet, RouterLink,RouterLinkActive,CommonModule,FormsModule],
  templateUrl: './diary-change.component.html',
  styleUrl: './diary-change.component.css'
})
export class DiaryChangeComponent implements OnInit {
  
  entries: any[] = []; 
  entry: any = {}; 

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
   
    const entriesJSON = localStorage.getItem('entries');
    if (entriesJSON) {
      this.entries = JSON.parse(entriesJSON);
    }

    const entryId = this.route.snapshot.paramMap.get('id'); 
    this.loadEntry(entryId);
  }

  loadEntry(id: string | null): void {
    if (id) {
      const foundEntry = this.entries.find(entry => entry.id.toString() === id); 
      if (foundEntry) {
        this.entry = { ...foundEntry }; 
      } else {
        console.error(`Eintrag mit ID ${id} nicht gefunden`);
      }
    } else {
      console.error('Ungültige Eintrag-ID');
    }
  }

  saveEntry(): void {
    
    const index = this.entries.findIndex(entry => entry.id === this.entry.id);
    if (index !== -1) {
      this.entries[index] = { ...this.entry }; 
      localStorage.setItem('entries', JSON.stringify(this.entries)); 
      console.log('Eintrag gespeichert:', this.entry);
    } else {
      console.error(`Eintrag mit ID ${this.entry.id} nicht gefunden`);
    }

    this.router.navigate(['/diary-index-component']); 
  }

  onSubmit(): void {
    
    this.saveEntry();
  }

}