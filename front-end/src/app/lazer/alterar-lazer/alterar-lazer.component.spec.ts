import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarLazerComponent } from './alterar-lazer.component';

describe('AlterarLazerComponent', () => {
  let component: AlterarLazerComponent;
  let fixture: ComponentFixture<AlterarLazerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarLazerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarLazerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
