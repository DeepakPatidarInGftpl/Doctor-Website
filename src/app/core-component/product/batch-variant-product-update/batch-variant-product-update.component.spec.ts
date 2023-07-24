import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchVariantProductUpdateComponent } from './batch-variant-product-update.component';

describe('BatchVariantProductUpdateComponent', () => {
  let component: BatchVariantProductUpdateComponent;
  let fixture: ComponentFixture<BatchVariantProductUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchVariantProductUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchVariantProductUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
