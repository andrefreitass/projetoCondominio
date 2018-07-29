import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComunicadoComponent } from './listar-comunicado.component';

describe('ListarComunicadoComponent', () => {
  let component: ListarComunicadoComponent;
  let fixture: ComponentFixture<ListarComunicadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarComunicadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarComunicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
