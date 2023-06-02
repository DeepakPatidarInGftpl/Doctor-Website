import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchVariantProductComponent } from './batch-variant-product.component';

describe('BatchVariantProductComponent', () => {
  let component: BatchVariantProductComponent;
  let fixture: ComponentFixture<BatchVariantProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchVariantProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchVariantProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
