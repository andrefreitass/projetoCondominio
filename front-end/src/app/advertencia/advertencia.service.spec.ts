import { TestBed, inject } from '@angular/core/testing';

import { AdvertenciaService } from './advertencia.service';

describe('AdvertenciaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvertenciaService]
    });
  });

  it('should be created', inject([AdvertenciaService], (service: AdvertenciaService) => {
    expect(service).toBeTruthy();
  }));
});
