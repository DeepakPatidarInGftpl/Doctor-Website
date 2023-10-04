import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaymentVoucherComponent } from './list-payment-voucher.component';

describe('ListPaymentVoucherComponent', () => {
  let component: ListPaymentVoucherComponent;
  let fixture: ComponentFixture<ListPaymentVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPaymentVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPaymentVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
