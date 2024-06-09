import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShopheaderComponent } from '../shopheader/shopheader.component';
import { PlantDetailShopPageComponent } from './plant-detail-shop-page.component';

describe('PlantDetailShopPageComponent', () => {
  let component: PlantDetailShopPageComponent;
  let fixture: ComponentFixture<PlantDetailShopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantDetailShopPageComponent,ShopheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantDetailShopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
