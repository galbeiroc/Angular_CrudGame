import { TestBed } from '@angular/core/testing';

import { SergamesService } from './sergames.service';

describe('SergamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SergamesService = TestBed.get(SergamesService);
    expect(service).toBeTruthy();
  });
});
