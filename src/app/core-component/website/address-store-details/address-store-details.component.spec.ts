import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressStoreDetailsComponent } from './address-store-details.component';

describe('AddressStoreDetailsComponent', () => {
  let component: AddressStoreDetailsComponent;
  let fixture: ComponentFixture<AddressStoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressStoreDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressStoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
