import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyplantsMainComponent } from './myplants-main.component';

describe('MyplantsMainComponent', () => {
  let component: MyplantsMainComponent;
  let fixture: ComponentFixture<MyplantsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyplantsMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyplantsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
