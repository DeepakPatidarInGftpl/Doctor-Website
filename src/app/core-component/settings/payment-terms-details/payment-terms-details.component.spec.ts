import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTermsDetailsComponent } from './payment-terms-details.component';

describe('PaymentTermsDetailsComponent', () => {
  let component: PaymentTermsDetailsComponent;
  let fixture: ComponentFixture<PaymentTermsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentTermsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentTermsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
