import { Component } from '@angular/core';
import { QuoteComponent } from '../quote/quote.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [QuoteComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
