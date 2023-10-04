import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentVoucherComponent } from './add-payment-voucher.component';

describe('AddPaymentVoucherComponent', () => {
  let component: AddPaymentVoucherComponent;
  let fixture: ComponentFixture<AddPaymentVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaymentVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPaymentVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
