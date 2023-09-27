import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCountraVoucherComponent } from './add-countra-voucher.component';

describe('AddCountraVoucherComponent', () => {
  let component: AddCountraVoucherComponent;
  let fixture: ComponentFixture<AddCountraVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCountraVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCountraVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
