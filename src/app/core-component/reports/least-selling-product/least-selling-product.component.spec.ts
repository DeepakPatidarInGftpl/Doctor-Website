import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeastSellingProductComponent } from './least-selling-product.component';

describe('LeastSellingProductComponent', () => {
  let component: LeastSellingProductComponent;
  let fixture: ComponentFixture<LeastSellingProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeastSellingProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeastSellingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
