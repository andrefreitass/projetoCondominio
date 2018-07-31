import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPautaComponent } from './formulario-pauta.component';

describe('FormularioPautaComponent', () => {
  let component: FormularioPautaComponent;
  let fixture: ComponentFixture<FormularioPautaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioPautaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPautaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
