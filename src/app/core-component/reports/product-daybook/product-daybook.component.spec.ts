import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDaybookComponent } from './product-daybook.component';

describe('ProductDaybookComponent', () => {
  let component: ProductDaybookComponent;
  let fixture: ComponentFixture<ProductDaybookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDaybookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDaybookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
