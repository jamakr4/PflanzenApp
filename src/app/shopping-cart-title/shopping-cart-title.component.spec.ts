import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartTitleComponent } from './shopping-cart-title.component';

describe('ShoppingCartTitleComponent', () => {
  let component: ShoppingCartTitleComponent;
  let fixture: ComponentFixture<ShoppingCartTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingCartTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
