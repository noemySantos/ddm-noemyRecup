import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteModalPage } from './paciente-modal.page';

describe('PacienteModalPage', () => {
  let component: PacienteModalPage;
  let fixture: ComponentFixture<PacienteModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
