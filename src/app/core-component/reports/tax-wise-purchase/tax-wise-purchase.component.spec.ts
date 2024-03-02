import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxWisePurchaseComponent } from './tax-wise-purchase.component';

describe('TaxWisePurchaseComponent', () => {
  let component: TaxWisePurchaseComponent;
  let fixture: ComponentFixture<TaxWisePurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxWisePurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxWisePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
