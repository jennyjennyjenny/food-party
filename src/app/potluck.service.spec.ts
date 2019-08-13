import { TestBed } from '@angular/core/testing';

import { PotluckService } from './potluck.service';

describe('PotluckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PotluckService = TestBed.get(PotluckService);
    expect(service).toBeTruthy();
  });
});
