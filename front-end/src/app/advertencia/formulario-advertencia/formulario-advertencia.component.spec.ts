import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAdvertenciaComponent } from './formulario-advertencia.component';

describe('FormularioAdvertenciaComponent', () => {
  let component: FormularioAdvertenciaComponent;
  let fixture: ComponentFixture<FormularioAdvertenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioAdvertenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAdvertenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
