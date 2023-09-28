import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRecieptVoucherComponent } from './update-reciept-voucher.component';

describe('UpdateRecieptVoucherComponent', () => {
  let component: UpdateRecieptVoucherComponent;
  let fixture: ComponentFixture<UpdateRecieptVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRecieptVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRecieptVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
