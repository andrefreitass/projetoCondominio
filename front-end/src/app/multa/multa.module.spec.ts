import { MultaModule } from './multa.module';

describe('MultaModule', () => {
  let multaModule: MultaModule;

  beforeEach(() => {
    multaModule = new MultaModule();
  });

  it('should create an instance', () => {
    expect(multaModule).toBeTruthy();
  });
});
