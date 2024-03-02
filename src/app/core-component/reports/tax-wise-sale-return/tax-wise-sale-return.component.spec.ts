import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxWiseSaleReturnComponent } from './tax-wise-sale-return.component';

describe('TaxWiseSaleReturnComponent', () => {
  let component: TaxWiseSaleReturnComponent;
  let fixture: ComponentFixture<TaxWiseSaleReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxWiseSaleReturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxWiseSaleReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
