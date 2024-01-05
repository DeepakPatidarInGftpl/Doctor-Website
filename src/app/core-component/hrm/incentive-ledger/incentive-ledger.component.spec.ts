import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncentiveLedgerComponent } from './incentive-ledger.component';

describe('IncentiveLedgerComponent', () => {
  let component: IncentiveLedgerComponent;
  let fixture: ComponentFixture<IncentiveLedgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncentiveLedgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncentiveLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
