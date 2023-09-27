import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsJournalVoucherComponent } from './details-journal-voucher.component';

describe('DetailsJournalVoucherComponent', () => {
  let component: DetailsJournalVoucherComponent;
  let fixture: ComponentFixture<DetailsJournalVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsJournalVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsJournalVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
