import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierWiseProductComponent } from './supplier-wise-product.component';

describe('SupplierWiseProductComponent', () => {
  let component: SupplierWiseProductComponent;
  let fixture: ComponentFixture<SupplierWiseProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierWiseProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierWiseProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
