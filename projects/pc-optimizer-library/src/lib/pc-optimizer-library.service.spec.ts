import { TestBed } from '@angular/core/testing';

import { PcOptimizerLibraryService } from './pc-optimizer-library.service';

describe('PcOptimizerLibraryService', () => {
  let service: PcOptimizerLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcOptimizerLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
