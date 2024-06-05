import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoplandingpageComponent } from './shoplandingpage.component';

describe('ShoplandingpageComponent', () => {
  let component: ShoplandingpageComponent;
  let fixture: ComponentFixture<ShoplandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoplandingpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoplandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
