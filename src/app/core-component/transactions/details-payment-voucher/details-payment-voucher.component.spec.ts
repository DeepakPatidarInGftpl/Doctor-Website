import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPaymentVoucherComponent } from './details-payment-voucher.component';

describe('DetailsPaymentVoucherComponent', () => {
  let component: DetailsPaymentVoucherComponent;
  let fixture: ComponentFixture<DetailsPaymentVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPaymentVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPaymentVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
