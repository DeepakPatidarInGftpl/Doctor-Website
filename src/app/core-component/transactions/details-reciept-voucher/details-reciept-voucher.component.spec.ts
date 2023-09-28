import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRecieptVoucherComponent } from './details-reciept-voucher.component';

describe('DetailsRecieptVoucherComponent', () => {
  let component: DetailsRecieptVoucherComponent;
  let fixture: ComponentFixture<DetailsRecieptVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRecieptVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsRecieptVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
