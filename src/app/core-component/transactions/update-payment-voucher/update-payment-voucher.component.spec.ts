import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaymentVoucherComponent } from './update-payment-voucher.component';

describe('UpdatePaymentVoucherComponent', () => {
  let component: UpdatePaymentVoucherComponent;
  let fixture: ComponentFixture<UpdatePaymentVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePaymentVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePaymentVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
