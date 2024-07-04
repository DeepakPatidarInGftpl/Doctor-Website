import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosAddExpenseVoucherComponent } from './pos-add-expense-voucher.component';

describe('PosAddExpenseVoucherComponent', () => {
  let component: PosAddExpenseVoucherComponent;
  let fixture: ComponentFixture<PosAddExpenseVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosAddExpenseVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosAddExpenseVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
