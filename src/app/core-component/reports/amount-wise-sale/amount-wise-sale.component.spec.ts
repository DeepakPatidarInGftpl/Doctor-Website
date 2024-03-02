import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountWiseSaleComponent } from './amount-wise-sale.component';

describe('AmountWiseSaleComponent', () => {
  let component: AmountWiseSaleComponent;
  let fixture: ComponentFixture<AmountWiseSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountWiseSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmountWiseSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
