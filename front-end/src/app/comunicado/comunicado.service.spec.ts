import { TestBed, inject } from '@angular/core/testing';

import { ComunicadoService } from './comunicado.service';

describe('ComunicadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComunicadoService]
    });
  });

  it('should be created', inject([ComunicadoService], (service: ComunicadoService) => {
    expect(service).toBeTruthy();
  }));
});
