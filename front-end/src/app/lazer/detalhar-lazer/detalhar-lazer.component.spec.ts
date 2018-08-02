import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharLazerComponent } from './detalhar-lazer.component';

describe('DetalharLazerComponent', () => {
  let component: DetalharLazerComponent;
  let fixture: ComponentFixture<DetalharLazerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalharLazerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharLazerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
