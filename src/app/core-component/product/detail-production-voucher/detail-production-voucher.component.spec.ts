import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProductionVoucherComponent } from './detail-production-voucher.component';

describe('DetailProductionVoucherComponent', () => {
  let component: DetailProductionVoucherComponent;
  let fixture: ComponentFixture<DetailProductionVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProductionVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailProductionVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
