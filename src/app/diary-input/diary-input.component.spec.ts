import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryInputComponent } from './diary-input.component';

describe('DiaryInputComponent', () => {
  let component: DiaryInputComponent;
  let fixture: ComponentFixture<DiaryInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiaryInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiaryInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
