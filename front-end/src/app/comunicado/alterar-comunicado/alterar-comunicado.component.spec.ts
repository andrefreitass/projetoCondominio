import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarComunicadoComponent } from './alterar-comunicado.component';

describe('AlterarComunicadoComponent', () => {
  let component: AlterarComunicadoComponent;
  let fixture: ComponentFixture<AlterarComunicadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarComunicadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarComunicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
