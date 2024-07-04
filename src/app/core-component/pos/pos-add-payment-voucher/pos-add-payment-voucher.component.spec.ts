import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosAddPaymentVoucherComponent } from './pos-add-payment-voucher.component';

describe('PosAddPaymentVoucherComponent', () => {
  let component: PosAddPaymentVoucherComponent;
  let fixture: ComponentFixture<PosAddPaymentVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosAddPaymentVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosAddPaymentVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
