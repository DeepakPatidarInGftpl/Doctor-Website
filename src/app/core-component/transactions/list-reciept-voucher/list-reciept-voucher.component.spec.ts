import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecieptVoucherComponent } from './list-reciept-voucher.component';

describe('ListRecieptVoucherComponent', () => {
  let component: ListRecieptVoucherComponent;
  let fixture: ComponentFixture<ListRecieptVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRecieptVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRecieptVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
