import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdayeBrandSubcategoryOfferComponent } from './updaye-brand-subcategory-offer.component';

describe('UpdayeBrandSubcategoryOfferComponent', () => {
  let component: UpdayeBrandSubcategoryOfferComponent;
  let fixture: ComponentFixture<UpdayeBrandSubcategoryOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdayeBrandSubcategoryOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdayeBrandSubcategoryOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
