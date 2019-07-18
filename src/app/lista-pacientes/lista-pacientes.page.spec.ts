import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPacientesPage } from './lista-pacientes.page';

describe('ListaPacientesPage', () => {
  let component: ListaPacientesPage;
  let fixture: ComponentFixture<ListaPacientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPacientesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPacientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
