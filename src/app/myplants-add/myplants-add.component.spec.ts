import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyplantsAddComponent } from './myplants-add.component';

describe('MyplantsAddComponent', () => {
  let component: MyplantsAddComponent;
  let fixture: ComponentFixture<MyplantsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyplantsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyplantsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
