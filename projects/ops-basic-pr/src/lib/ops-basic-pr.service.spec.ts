import { TestBed } from '@angular/core/testing';

import { OpsBasicPrService } from './ops-basic-pr.service';

describe('OpsBasicPrService', () => {
  let service: OpsBasicPrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpsBasicPrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
