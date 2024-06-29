import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DiaryIndexComponent } from '../diary-index/diary-index.component';
@Component({
  selector: 'app-diary-entry',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <li class="dynamic-div">
      <h1>{{ entry.header }}</h1>
      <p class="plant-text">Pflanze: {{ entry.pflanze }}</p>
      <p>{{ entry.text }}</p>
      <button (click)="onDelete()" class="delete-icon">X</button>
      <button [routerLink]="['/diary-change-component', entry.id]" class="edit-icon">&#9998;</button>
    </li>
  `,
  styleUrls: ['../diary-index/diary-index.component.css']
})
export class DiaryEntryComponent {
  @Input() entry: any;
  @Output() deleteEntry = new EventEmitter<any>();

  onDelete(): void {
    this.deleteEntry.emit(this.entry);
  }
}