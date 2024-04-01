import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBrandSubcategoryOfferComponent } from './list-brand-subcategory-offer.component';

describe('ListBrandSubcategoryOfferComponent', () => {
  let component: ListBrandSubcategoryOfferComponent;
  let fixture: ComponentFixture<ListBrandSubcategoryOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBrandSubcategoryOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBrandSubcategoryOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
