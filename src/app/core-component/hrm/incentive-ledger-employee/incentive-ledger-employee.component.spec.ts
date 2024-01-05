import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncentiveLedgerEmployeeComponent } from './incentive-ledger-employee.component';

describe('IncentiveLedgerEmployeeComponent', () => {
  let component: IncentiveLedgerEmployeeComponent;
  let fixture: ComponentFixture<IncentiveLedgerEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncentiveLedgerEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncentiveLedgerEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
