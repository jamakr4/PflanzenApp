import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-backgroundimage',
  standalone: true,
  imports: [],
  templateUrl: './backgroundimage.component.html',
  styleUrl: './backgroundimage.component.css'
})
export class BackgroundimageComponent {
  image = "/Background1.png";
}
