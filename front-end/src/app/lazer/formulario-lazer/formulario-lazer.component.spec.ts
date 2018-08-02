import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLazerComponent } from './formulario-lazer.component';

describe('FormularioLazerComponent', () => {
  let component: FormularioLazerComponent;
  let fixture: ComponentFixture<FormularioLazerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioLazerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioLazerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
