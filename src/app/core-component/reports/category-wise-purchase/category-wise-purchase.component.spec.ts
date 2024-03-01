import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWisePurchaseComponent } from './category-wise-purchase.component';

describe('CategoryWisePurchaseComponent', () => {
  let component: CategoryWisePurchaseComponent;
  let fixture: ComponentFixture<CategoryWisePurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryWisePurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryWisePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
