import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoPerfilModalPage } from './novo-perfil-modal.page';

describe('NovoPerfilModalPage', () => {
  let component: NovoPerfilModalPage;
  let fixture: ComponentFixture<NovoPerfilModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoPerfilModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoPerfilModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
