import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxWiseSaleComponent } from './tax-wise-sale.component';

describe('TaxWiseSaleComponent', () => {
  let component: TaxWiseSaleComponent;
  let fixture: ComponentFixture<TaxWiseSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxWiseSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxWiseSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
