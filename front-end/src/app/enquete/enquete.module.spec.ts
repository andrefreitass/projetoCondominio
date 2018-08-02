import { EnqueteModule } from './enquete.module';

describe('EnqueteModule', () => {
  let enqueteModule: EnqueteModule;

  beforeEach(() => {
    enqueteModule = new EnqueteModule();
  });

  it('should create an instance', () => {
    expect(enqueteModule).toBeTruthy();
  });
});
