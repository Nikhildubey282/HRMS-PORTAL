import { TestBed } from '@angular/core/testing';

import { SnackBerService } from './snack-ber.service';

describe('SnackBerService', () => {
  let service: SnackBerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackBerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
