import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyplantsOwnplantComponent } from './myplants-ownplant.component';

describe('MyplantsOwnplantComponent', () => {
  let component: MyplantsOwnplantComponent;
  let fixture: ComponentFixture<MyplantsOwnplantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyplantsOwnplantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyplantsOwnplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
