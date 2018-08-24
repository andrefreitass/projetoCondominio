import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarMultaComponent } from './alterar-multa.component';

describe('AlterarMultaComponent', () => {
  let component: AlterarMultaComponent;
  let fixture: ComponentFixture<AlterarMultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarMultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarMultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
