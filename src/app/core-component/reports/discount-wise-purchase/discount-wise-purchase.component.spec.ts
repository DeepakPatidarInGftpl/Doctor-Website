import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountWisePurchaseComponent } from './discount-wise-purchase.component';

describe('DiscountWisePurchaseComponent', () => {
  let component: DiscountWisePurchaseComponent;
  let fixture: ComponentFixture<DiscountWisePurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountWisePurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountWisePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
