import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharComunicadoComponent } from './detalhar-comunicado.component';

describe('DetalharComunicadoComponent', () => {
  let component: DetalharComunicadoComponent;
  let fixture: ComponentFixture<DetalharComunicadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalharComunicadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharComunicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
