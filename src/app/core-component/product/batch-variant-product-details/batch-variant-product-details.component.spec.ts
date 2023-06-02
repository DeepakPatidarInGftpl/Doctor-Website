import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchVariantProductDetailsComponent } from './batch-variant-product-details.component';

describe('BatchVariantProductDetailsComponent', () => {
  let component: BatchVariantProductDetailsComponent;
  let fixture: ComponentFixture<BatchVariantProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchVariantProductDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchVariantProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
