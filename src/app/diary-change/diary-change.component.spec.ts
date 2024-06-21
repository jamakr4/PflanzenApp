import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryChangeComponent } from './diary-change.component';

describe('DiaryChangeComponent', () => {
  let component: DiaryChangeComponent;
  let fixture: ComponentFixture<DiaryChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiaryChangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiaryChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
