import { LazerModule } from './lazer.module';

describe('LazerModule', () => {
  let lazerModule: LazerModule;

  beforeEach(() => {
    lazerModule = new LazerModule();
  });

  it('should create an instance', () => {
    expect(lazerModule).toBeTruthy();
  });
});
