import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEnqueteComponent } from './formulario-enquete.component';

describe('FormularioEnqueteComponent', () => {
  let component: FormularioEnqueteComponent;
  let fixture: ComponentFixture<FormularioEnqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioEnqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEnqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
