import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceAmountComponent } from './invoice-amount.component';

describe('InvoiceAmountComponent', () => {
  let component: InvoiceAmountComponent;
  let fixture: ComponentFixture<InvoiceAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
