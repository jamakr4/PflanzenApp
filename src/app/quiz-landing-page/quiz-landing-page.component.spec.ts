import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizLandingPageComponent } from './quiz-landing-page.component';

describe('QuizLandingPageComponent', () => {
  let component: QuizLandingPageComponent;
  let fixture: ComponentFixture<QuizLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
