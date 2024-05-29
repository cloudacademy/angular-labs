import { TestBed } from '@angular/core/testing';

import { TimedLoggerService } from './timed-logger.service';

describe('TimedLoggerService', () => {
  let service: TimedLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimedLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
