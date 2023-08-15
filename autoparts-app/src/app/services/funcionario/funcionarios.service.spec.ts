import { TestBed } from '@angular/core/testing';

import { FuncionariosService } from './funcionarios.service';

describe('FuncionariosService', () => {
  let service: FuncionariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
