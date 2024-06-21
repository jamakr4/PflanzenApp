import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryIndexComponent } from './diary-index.component';

describe('DiaryIndexComponent', () => {
  let component: DiaryIndexComponent;
  let fixture: ComponentFixture<DiaryIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiaryIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiaryIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
