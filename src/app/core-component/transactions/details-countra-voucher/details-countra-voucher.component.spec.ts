import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCountraVoucherComponent } from './details-countra-voucher.component';

describe('DetailsCountraVoucherComponent', () => {
  let component: DetailsCountraVoucherComponent;
  let fixture: ComponentFixture<DetailsCountraVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCountraVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsCountraVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
