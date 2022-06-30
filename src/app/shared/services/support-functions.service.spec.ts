import { TestBed } from '@angular/core/testing';

import { SupportFunctionsService } from './support-functions.service';

describe('SupportFunctionsService', () => {
  let service: SupportFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupportFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
