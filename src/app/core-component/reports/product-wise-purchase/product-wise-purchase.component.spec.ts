import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWisePurchaseComponent } from './product-wise-purchase.component';

describe('ProductWisePurchaseComponent', () => {
  let component: ProductWisePurchaseComponent;
  let fixture: ComponentFixture<ProductWisePurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWisePurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductWisePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
