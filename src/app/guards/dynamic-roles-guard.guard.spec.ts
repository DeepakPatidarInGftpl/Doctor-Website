import { TestBed } from '@angular/core/testing';

import { DynamicRolesGuardGuard } from './dynamic-roles-guard.guard';

describe('DynamicRolesGuardGuard', () => {
  let guard: DynamicRolesGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DynamicRolesGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
