import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPautaComponent } from './listar-pauta.component';

describe('ListarPautaComponent', () => {
  let component: ListarPautaComponent;
  let fixture: ComponentFixture<ListarPautaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPautaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPautaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
