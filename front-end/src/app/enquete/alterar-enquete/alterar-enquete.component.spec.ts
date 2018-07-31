import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarEnqueteComponent } from './alterar-enquete.component';

describe('AlterarEnqueteComponent', () => {
  let component: AlterarEnqueteComponent;
  let fixture: ComponentFixture<AlterarEnqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarEnqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarEnqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
