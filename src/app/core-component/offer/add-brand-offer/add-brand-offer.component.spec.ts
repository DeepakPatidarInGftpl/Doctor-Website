import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBrandOfferComponent } from './add-brand-offer.component';

describe('AddBrandOfferComponent', () => {
  let component: AddBrandOfferComponent;
  let fixture: ComponentFixture<AddBrandOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBrandOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBrandOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
