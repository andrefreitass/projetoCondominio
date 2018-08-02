import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEnqueteComponent } from './listar-enquete.component';

describe('ListarEnqueteComponent', () => {
  let component: ListarEnqueteComponent;
  let fixture: ComponentFixture<ListarEnqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarEnqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEnqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
