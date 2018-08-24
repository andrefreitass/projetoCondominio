import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarAdvertenciaComponent } from './alterar-advertencia.component';

describe('AlterarAdvertenciaComponent', () => {
  let component: AlterarAdvertenciaComponent;
  let fixture: ComponentFixture<AlterarAdvertenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarAdvertenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarAdvertenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
