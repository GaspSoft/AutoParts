import { TestBed } from '@angular/core/testing';

import { ValidaLoginService } from './valida-login.service';

describe('ValidaLoginService', () => {
  let service: ValidaLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidaLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
