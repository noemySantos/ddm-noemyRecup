import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosDetailPage } from './dados-detail.page';

describe('DadosDetailPage', () => {
  let component: DadosDetailPage;
  let fixture: ComponentFixture<DadosDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
