import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMultaComponent } from './listar-multa.component';

describe('ListarMultaComponent', () => {
  let component: ListarMultaComponent;
  let fixture: ComponentFixture<ListarMultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarMultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
