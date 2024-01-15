import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLabelListComponent } from './product-label-list.component';

describe('ProductLabelListComponent', () => {
  let component: ProductLabelListComponent;
  let fixture: ComponentFixture<ProductLabelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLabelListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductLabelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
