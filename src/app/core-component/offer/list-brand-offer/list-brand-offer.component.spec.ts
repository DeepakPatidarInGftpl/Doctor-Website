import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBrandOfferComponent } from './list-brand-offer.component';

describe('ListBrandOfferComponent', () => {
  let component: ListBrandOfferComponent;
  let fixture: ComponentFixture<ListBrandOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBrandOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBrandOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
