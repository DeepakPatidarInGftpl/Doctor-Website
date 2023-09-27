import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCountraVoucherComponent } from './update-countra-voucher.component';

describe('UpdateCountraVoucherComponent', () => {
  let component: UpdateCountraVoucherComponent;
  let fixture: ComponentFixture<UpdateCountraVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCountraVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCountraVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
