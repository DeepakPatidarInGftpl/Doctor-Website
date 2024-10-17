import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseBillPaymentComponent } from './purchase-bill-payment.component';

describe('PurchaseBillPaymentComponent', () => {
  let component: PurchaseBillPaymentComponent;
  let fixture: ComponentFixture<PurchaseBillPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseBillPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseBillPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
