import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAddressStoreComponent } from './update-address-store.component';

describe('UpdateAddressStoreComponent', () => {
  let component: UpdateAddressStoreComponent;
  let fixture: ComponentFixture<UpdateAddressStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAddressStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAddressStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
