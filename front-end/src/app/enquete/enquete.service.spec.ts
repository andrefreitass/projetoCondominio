import { TestBed, inject } from '@angular/core/testing';

import { EnqueteService } from './enquete.service';

describe('EnqueteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnqueteService]
    });
  });

  it('should be created', inject([EnqueteService], (service: EnqueteService) => {
    expect(service).toBeTruthy();
  }));
});
