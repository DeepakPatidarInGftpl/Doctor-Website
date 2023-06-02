import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchVariantProductListComponent } from './batch-variant-product-list.component';

describe('BatchVariantProductListComponent', () => {
  let component: BatchVariantProductListComponent;
  let fixture: ComponentFixture<BatchVariantProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchVariantProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchVariantProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
