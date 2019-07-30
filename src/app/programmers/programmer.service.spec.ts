import { TestBed } from '@angular/core/testing';

import { ProgrammerService } from './programmer.service';

describe('ProgrammerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgrammerService = TestBed.get(ProgrammerService);
    expect(service).toBeTruthy();
  });
});
