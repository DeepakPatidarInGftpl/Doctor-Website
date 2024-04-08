import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductionVoucherComponent } from './add-production-voucher.component';

describe('AddProductionVoucherComponent', () => {
  let component: AddProductionVoucherComponent;
  let fixture: ComponentFixture<AddProductionVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductionVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductionVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
