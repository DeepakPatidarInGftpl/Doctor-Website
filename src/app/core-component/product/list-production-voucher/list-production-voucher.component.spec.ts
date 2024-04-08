import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductionVoucherComponent } from './list-production-voucher.component';

describe('ListProductionVoucherComponent', () => {
  let component: ListProductionVoucherComponent;
  let fixture: ComponentFixture<ListProductionVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductionVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductionVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
