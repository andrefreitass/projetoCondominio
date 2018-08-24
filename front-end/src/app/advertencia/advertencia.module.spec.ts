import { AdvertenciaModule } from './advertencia.module';

describe('AdvertenciaModule', () => {
  let advertenciaModule: AdvertenciaModule;

  beforeEach(() => {
    advertenciaModule = new AdvertenciaModule();
  });

  it('should create an instance', () => {
    expect(advertenciaModule).toBeTruthy();
  });
});
