import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosAddReceiptsVoucherComponent } from './pos-add-receipts-voucher.component';

describe('PosAddReceiptsVoucherComponent', () => {
  let component: PosAddReceiptsVoucherComponent;
  let fixture: ComponentFixture<PosAddReceiptsVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosAddReceiptsVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosAddReceiptsVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
