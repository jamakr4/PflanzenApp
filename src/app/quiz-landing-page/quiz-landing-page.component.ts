import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizHeaderComponent } from '../quiz-header/quiz-header.component';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-quiz-landing-page',
  standalone: true,
  imports: [QuizHeaderComponent, CommonModule, NgIf, RouterLink, RouterOutlet, NotFoundComponent],
  templateUrl: './quiz-landing-page.component.html',
  styleUrls: ['./quiz-landing-page.component.css']
})
export class QuizLandingPageComponent {

  constructor(private router: Router) {}

  startQuiz() {

    this.router.navigate(['/quiz']);
  }
}
