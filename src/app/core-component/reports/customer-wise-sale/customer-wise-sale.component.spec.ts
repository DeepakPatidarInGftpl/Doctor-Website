import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerWiseSaleComponent } from './customer-wise-sale.component';

describe('CustomerWiseSaleComponent', () => {
  let component: CustomerWiseSaleComponent;
  let fixture: ComponentFixture<CustomerWiseSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerWiseSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerWiseSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
