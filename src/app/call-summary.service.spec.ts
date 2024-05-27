import { TestBed } from '@angular/core/testing';

import { CallSummaryService } from './call-summary.service';

describe('CallSummaryService', () => {
  let service: CallSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
