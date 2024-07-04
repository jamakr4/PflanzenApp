import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyplantsDescriptionComponent } from './myplants-description.component';

describe('MyplantsDescriptionComponent', () => {
  let component: MyplantsDescriptionComponent;
  let fixture: ComponentFixture<MyplantsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyplantsDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyplantsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
