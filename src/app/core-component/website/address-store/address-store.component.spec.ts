import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressStoreComponent } from './address-store.component';

describe('AddressStoreComponent', () => {
  let component: AddressStoreComponent;
  let fixture: ComponentFixture<AddressStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
