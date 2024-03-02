import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWiseSaleComponent } from './category-wise-sale.component';

describe('CategoryWiseSaleComponent', () => {
  let component: CategoryWiseSaleComponent;
  let fixture: ComponentFixture<CategoryWiseSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryWiseSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryWiseSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
