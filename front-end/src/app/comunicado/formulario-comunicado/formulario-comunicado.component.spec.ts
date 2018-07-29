import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComunicadoComponent } from './formulario-comunicado.component';

describe('FormularioComunicadoComponent', () => {
  let component: FormularioComunicadoComponent;
  let fixture: ComponentFixture<FormularioComunicadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioComunicadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioComunicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
