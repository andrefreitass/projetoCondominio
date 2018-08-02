import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarPautaComponent } from './alterar-pauta.component';

describe('AlterarPautaComponent', () => {
  let component: AlterarPautaComponent;
  let fixture: ComponentFixture<AlterarPautaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarPautaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarPautaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
