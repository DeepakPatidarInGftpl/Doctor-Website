import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJournalVoucherComponent } from './update-journal-voucher.component';

describe('UpdateJournalVoucherComponent', () => {
  let component: UpdateJournalVoucherComponent;
  let fixture: ComponentFixture<UpdateJournalVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateJournalVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateJournalVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
