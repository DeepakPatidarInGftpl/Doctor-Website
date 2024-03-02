import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerWiseSaleOrderComponent } from './customer-wise-sale-order.component';

describe('CustomerWiseSaleOrderComponent', () => {
  let component: CustomerWiseSaleOrderComponent;
  let fixture: ComponentFixture<CustomerWiseSaleOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerWiseSaleOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerWiseSaleOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
