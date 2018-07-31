import { PautaModule } from './pauta.module';

describe('PautaModule', () => {
  let pautaModule: PautaModule;

  beforeEach(() => {
    pautaModule = new PautaModule();
  });

  it('should create an instance', () => {
    expect(pautaModule).toBeTruthy();
  });
});
