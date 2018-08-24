import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAdvertenciaComponent } from './listar-advertencia.component';

describe('ListarAdvertenciaComponent', () => {
  let component: ListarAdvertenciaComponent;
  let fixture: ComponentFixture<ListarAdvertenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAdvertenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAdvertenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
