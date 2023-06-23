import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddressStoreComponent } from './add-address-store.component';

describe('AddAddressStoreComponent', () => {
  let component: AddAddressStoreComponent;
  let fixture: ComponentFixture<AddAddressStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAddressStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAddressStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
