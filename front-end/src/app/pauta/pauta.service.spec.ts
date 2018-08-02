import { TestBed, inject } from '@angular/core/testing';

import { PautaService } from './pauta.service';

describe('PautaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PautaService]
    });
  });

  it('should be created', inject([PautaService], (service: PautaService) => {
    expect(service).toBeTruthy();
  }));
});
