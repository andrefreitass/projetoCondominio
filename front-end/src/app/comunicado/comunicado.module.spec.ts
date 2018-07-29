import { ComunicadoModule } from './comunicado.module';

describe('ComunicadoModule', () => {
  let comunicadoModule: ComunicadoModule;

  beforeEach(() => {
    comunicadoModule = new ComunicadoModule();
  });

  it('should create an instance', () => {
    expect(comunicadoModule).toBeTruthy();
  });
});
