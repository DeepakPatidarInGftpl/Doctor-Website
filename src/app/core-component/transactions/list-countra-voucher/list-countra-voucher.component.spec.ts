import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCountraVoucherComponent } from './list-countra-voucher.component';

describe('ListCountraVoucherComponent', () => {
  let component: ListCountraVoucherComponent;
  let fixture: ComponentFixture<ListCountraVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCountraVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCountraVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
