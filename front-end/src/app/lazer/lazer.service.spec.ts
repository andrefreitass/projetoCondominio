import { TestBed, inject } from '@angular/core/testing';

import { LazerService } from './lazer.service';

describe('LazerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LazerService]
    });
  });

  it('should be created', inject([LazerService], (service: LazerService) => {
    expect(service).toBeTruthy();
  }));
});
