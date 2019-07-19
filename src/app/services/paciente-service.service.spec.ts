import { TestBed } from '@angular/core/testing';

import { PacienteServiceService } from './paciente-service.service';

describe('PacienteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PacienteServiceService = TestBed.get(PacienteServiceService);
    expect(service).toBeTruthy();
  });
});
