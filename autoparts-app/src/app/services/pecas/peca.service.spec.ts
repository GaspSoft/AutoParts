import { TestBed } from '@angular/core/testing';

import { PecaService } from './peca.service';

describe('PecaService', () => {
  let service: PecaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PecaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
