import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecieptVoucherComponent } from './add-reciept-voucher.component';

describe('AddRecieptVoucherComponent', () => {
  let component: AddRecieptVoucherComponent;
  let fixture: ComponentFixture<AddRecieptVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecieptVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRecieptVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
