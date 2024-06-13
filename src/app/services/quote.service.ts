import { Injectable } from '@angular/core';
import { sample_quote } from '../quoteData';
import { Quote } from '../classes/quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor() { }

  getQuote():Quote
  {
    const randomIndex = Math.floor(Math.random() * sample_quote.length);
    return sample_quote[randomIndex];
  }
}