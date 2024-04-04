import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInvoiceAmountComponent } from './list-invoice-amount.component';

describe('ListInvoiceAmountComponent', () => {
  let component: ListInvoiceAmountComponent;
  let fixture: ComponentFixture<ListInvoiceAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInvoiceAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListInvoiceAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
