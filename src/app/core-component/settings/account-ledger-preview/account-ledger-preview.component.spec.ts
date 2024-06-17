import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountLedgerPreviewComponent } from './account-ledger-preview.component';

describe('AccountLedgerPreviewComponent', () => {
  let component: AccountLedgerPreviewComponent;
  let fixture: ComponentFixture<AccountLedgerPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountLedgerPreviewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AccountLedgerPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
