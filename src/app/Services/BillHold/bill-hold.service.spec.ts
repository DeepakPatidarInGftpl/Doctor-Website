import { TestBed } from '@angular/core/testing';

import { BillHoldService } from './bill-hold.service';

describe('BillHoldService', () => {
  let service: BillHoldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillHoldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
