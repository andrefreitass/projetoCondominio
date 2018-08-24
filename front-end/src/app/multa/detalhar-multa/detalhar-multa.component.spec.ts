import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharMultaComponent } from './detalhar-multa.component';

describe('DetalharMultaComponent', () => {
  let component: DetalharMultaComponent;
  let fixture: ComponentFixture<DetalharMultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalharMultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharMultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
