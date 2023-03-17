import { TestBed } from '@angular/core/testing';

import { PosCartService } from './pos-cart.service';

describe('PosCartService', () => {
  let service: PosCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
