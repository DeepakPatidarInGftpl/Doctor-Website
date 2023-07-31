import { TestBed } from '@angular/core/testing';

import { PosDashboardService } from './pos-dashboard.service';

describe('PosDashboardService', () => {
  let service: PosDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
