import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMultaComponent } from './formulario-multa.component';

describe('FormularioMultaComponent', () => {
  let component: FormularioMultaComponent;
  let fixture: ComponentFixture<FormularioMultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioMultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioMultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
