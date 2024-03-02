import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxWisePurchaseReturnComponent } from './tax-wise-purchase-return.component';

describe('TaxWisePurchaseReturnComponent', () => {
  let component: TaxWisePurchaseReturnComponent;
  let fixture: ComponentFixture<TaxWisePurchaseReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxWisePurchaseReturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxWisePurchaseReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
