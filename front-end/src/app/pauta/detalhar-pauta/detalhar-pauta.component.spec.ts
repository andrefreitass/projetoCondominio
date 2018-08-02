import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharPautaComponent } from './detalhar-pauta.component';

describe('DetalharPautaComponent', () => {
  let component: DetalharPautaComponent;
  let fixture: ComponentFixture<DetalharPautaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalharPautaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharPautaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
