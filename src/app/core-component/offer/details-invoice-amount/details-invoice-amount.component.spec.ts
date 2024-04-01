import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsInvoiceAmountComponent } from './details-invoice-amount.component';

describe('DetailsInvoiceAmountComponent', () => {
  let component: DetailsInvoiceAmountComponent;
  let fixture: ComponentFixture<DetailsInvoiceAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsInvoiceAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsInvoiceAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
