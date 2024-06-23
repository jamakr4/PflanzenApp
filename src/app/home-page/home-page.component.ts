import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { QuoteComponent } from '../quote/quote.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [QuoteComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
    if (!this.location.path()) {
      this.router.navigate(['/home']);
    }
  }

}