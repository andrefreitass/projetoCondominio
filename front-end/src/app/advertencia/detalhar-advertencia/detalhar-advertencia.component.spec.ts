import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharAdvertenciaComponent } from './detalhar-advertencia.component';

describe('DetalharAdvertenciaComponent', () => {
  let component: DetalharAdvertenciaComponent;
  let fixture: ComponentFixture<DetalharAdvertenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalharAdvertenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharAdvertenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
