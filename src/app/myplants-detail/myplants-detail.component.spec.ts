import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyplantsDetailComponent } from './myplants-detail.component';

describe('MyplantsDetailComponent', () => {
  let component: MyplantsDetailComponent;
  let fixture: ComponentFixture<MyplantsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyplantsDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyplantsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
