import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBrandOfferComponent } from './update-brand-offer.component';

describe('UpdateBrandOfferComponent', () => {
  let component: UpdateBrandOfferComponent;
  let fixture: ComponentFixture<UpdateBrandOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBrandOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBrandOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
