import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCheckoutPageComponent } from './shop-checkout-page.component';

describe('ShopCheckoutPageComponent', () => {
  let component: ShopCheckoutPageComponent;
  let fixture: ComponentFixture<ShopCheckoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopCheckoutPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopCheckoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
