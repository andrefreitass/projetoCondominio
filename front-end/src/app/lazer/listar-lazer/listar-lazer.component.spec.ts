import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLazerComponent } from './listar-lazer.component';

describe('ListarLazerComponent', () => {
  let component: ListarLazerComponent;
  let fixture: ComponentFixture<ListarLazerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarLazerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarLazerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
