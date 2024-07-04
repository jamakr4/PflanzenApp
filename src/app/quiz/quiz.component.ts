import { Component } from '@angular/core';
import { QuizQuestion } from './quiz-question';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlantService } from '../services/plant.service';
import { log } from 'console';
import { Plant } from '../classes/plants';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

  constructor(public plantService: PlantService) {}

  index = 0;
  showRecommendations = false;
  recommendedPlants: Plant[] = [];

  quizQuestions: QuizQuestion[] = [
    {
      question: "How much time are you willing to invest in plant care?",
      type: 'radio',
      answers: [
        {
          label: "Minimal",
          selected: false
        },
        {
          label: "Weekly",
          selected: false
        },
        {
          label: "Monthly",
          selected: false
        },
      ],
      name: "maintenance",
    },
    {
      question: "How would you describe your experience with plants?",
      type: 'radio',
      answers: [
        {
          label: "Beginner",
          selected: false
        },
        {
          label: "Intermediate",
          selected: false
        },
        {
          label: "Expert",
          selected: false
        },
      ],
      name: "experience",

    },
    {

      question: "What are the light conditions where the plant will be placed?",
      type: 'radio',
      answers:
      [
        {
          label: "Direct sunlight",
          selected: false
        },
        {
          label: "Bright, indirect light",
          selected: false
        },
        {
          label: "Partial sun",
          selected: false
        },
        {
          label: "Low light/shade",
          selected: false
        },
      ],
      name: "lightConditions",

    },

    {
      question: "What is the main purpose of the plant for you?",
      type: 'radio',
      answers:  [
        {
          label: "Decoration",
          selected: false
        },
        {
          label: "Air purification",
          selected: false
        },
        {
          label: "Edible (e.g., herbs, vegetables)",
          selected: false
        },
        {
          label: "Other",
          selected: false
        },
      ],
      name: "purpose",
    },

    {
      question: "Do you have any specific requirements or preferences for the plant?",
      type: 'checkbox',
      answers: [
        {
          label: "Pet-friendly",
          selected: false
        },
        {
          label: "Allergy-friendly",
          selected: false
        },
        {
          label: "Non-toxic for children",
          selected: false
        },
        {
          label: "Other",
          selected: false
        },
      ],
      name: "requirements",
    },

    {
      question: "How much space do you have available for the plant?",
      type: 'radio',
      answers: [
        {
          label: "Limited space (e.g., small desk)",
          selected: false
        },
        {
          label: "Medium Space (e.g. Windowsill)",
          selected: false
        },
        {
          label: "Plenty of space (e.g., large room)",
          selected: false
        },
      ],
      name: "space",
    },
  ];

  navigateToNextQuestion() {

    if (this.index < this.quizQuestions.length - 1) {
      this.index = this.index + 1;
    } else {
      this.getRecommendedPlants();
      this.showRecommendations = true;
    }

  }

  selectAnswer(answer: any) {
    answer.selected = !answer.selected;
  }

  getRecommendedPlants() {
    const maintenance = this.getSelectedAnswers(this.quizQuestions[0]);
    const experience = this.getSelectedAnswers(this.quizQuestions[1]);
    const lightConditions = this.getSelectedAnswers(this.quizQuestions[2]);
    const purpose = this.getSelectedAnswers(this.quizQuestions[3]);
    const requirements = this.getSelectedAnswers(this.quizQuestions[4]);
    const space = this.getSelectedAnswers(this.quizQuestions[5]);

    this.recommendedPlants = this.plantService.getAll()
    .filter(plant => maintenance.includes(plant.maintenance.toLowerCase()))
    .filter(plant => experience.includes(plant.expierience.toLowerCase()))
    .filter(plant => lightConditions.includes(plant.sunlight.toLowerCase()))
    .filter(plant => purpose.includes(plant.purpose.toLowerCase()))
    .filter(plant => space.includes(plant.space.toLowerCase()));

    console.log(this.recommendedPlants)

  }

  getSelectedAnswers(question: QuizQuestion) {
     return question.answers.filter(answer => answer.selected === true).map(answer => answer.label.toLowerCase());
  }

}
