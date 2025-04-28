import { TestBed } from '@angular/core/testing';

import { InvestmentcalService } from './investmentcal.service';

describe('InvestmentcalService', () => {
  let service: InvestmentcalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestmentcalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
