import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBrandSubcategoryOfferComponent } from './add-brand-subcategory-offer.component';

describe('AddBrandSubcategoryOfferComponent', () => {
  let component: AddBrandSubcategoryOfferComponent;
  let fixture: ComponentFixture<AddBrandSubcategoryOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBrandSubcategoryOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBrandSubcategoryOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
