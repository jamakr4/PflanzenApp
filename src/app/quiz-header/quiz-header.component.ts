import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-quiz-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './quiz-header.component.html',
  styleUrl: './quiz-header.component.css'
})
export class QuizHeaderComponent {

}
