import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFuncionarioComponent } from './formulario-funcionario.component';

describe('FormularioFuncionarioComponent', () => {
  let component: FormularioFuncionarioComponent;
  let fixture: ComponentFixture<FormularioFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
