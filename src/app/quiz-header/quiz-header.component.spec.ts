import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizHeaderComponent } from './quiz-header.component';

describe('QuizHeaderComponent', () => {
  let component: QuizHeaderComponent;
  let fixture: ComponentFixture<QuizHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
