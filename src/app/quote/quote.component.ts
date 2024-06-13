import { Component } from '@angular/core';
import { Quote } from '../classes/quote';
import { QuoteService } from '../services/quote.service';


@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent {

  quote:Quote;

  constructor(private quoteService:QuoteService)
{
  this.quote=quoteService.getQuote();
}

}
