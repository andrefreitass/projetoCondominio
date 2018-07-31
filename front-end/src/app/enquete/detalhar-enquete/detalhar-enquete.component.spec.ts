import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharEnqueteComponent } from './detalhar-enquete.component';

describe('DetalharEnqueteComponent', () => {
  let component: DetalharEnqueteComponent;
  let fixture: ComponentFixture<DetalharEnqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalharEnqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharEnqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
