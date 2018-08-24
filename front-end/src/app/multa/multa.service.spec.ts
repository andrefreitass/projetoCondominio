import { TestBed, inject } from '@angular/core/testing';

import { MultaService } from './multa.service';

describe('MultaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MultaService]
    });
  });

  it('should be created', inject([MultaService], (service: MultaService) => {
    expect(service).toBeTruthy();
  }));
});
