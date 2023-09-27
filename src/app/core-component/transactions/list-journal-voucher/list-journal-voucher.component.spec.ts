import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJournalVoucherComponent } from './list-journal-voucher.component';

describe('ListJournalVoucherComponent', () => {
  let component: ListJournalVoucherComponent;
  let fixture: ComponentFixture<ListJournalVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListJournalVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListJournalVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
