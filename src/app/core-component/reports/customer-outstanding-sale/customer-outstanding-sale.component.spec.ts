import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOutstandingSaleComponent } from './customer-outstanding-sale.component';

describe('CustomerOutstandingSaleComponent', () => {
  let component: CustomerOutstandingSaleComponent;
  let fixture: ComponentFixture<CustomerOutstandingSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOutstandingSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerOutstandingSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
