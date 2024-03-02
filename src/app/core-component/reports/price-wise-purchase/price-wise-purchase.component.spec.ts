import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceWisePurchaseComponent } from './price-wise-purchase.component';

describe('PriceWisePurchaseComponent', () => {
  let component: PriceWisePurchaseComponent;
  let fixture: ComponentFixture<PriceWisePurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceWisePurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceWisePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
