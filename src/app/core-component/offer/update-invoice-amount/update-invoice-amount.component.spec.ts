import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInvoiceAmountComponent } from './update-invoice-amount.component';

describe('UpdateInvoiceAmountComponent', () => {
  let component: UpdateInvoiceAmountComponent;
  let fixture: ComponentFixture<UpdateInvoiceAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInvoiceAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateInvoiceAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
