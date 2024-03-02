import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandWisePurchaseComponent } from './brand-wise-purchase.component';

describe('BrandWisePurchaseComponent', () => {
  let component: BrandWisePurchaseComponent;
  let fixture: ComponentFixture<BrandWisePurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandWisePurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandWisePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
