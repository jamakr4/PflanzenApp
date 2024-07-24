import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-caroussel',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './caroussel.component.html',
  styleUrl: './caroussel.component.css'
})
export class CarousselComponent {
  constructor(private router: Router) {}

  openQuiz() {
    this.router.navigate(['./quiz-landing-page']);
  }
}

