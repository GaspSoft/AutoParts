/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarrinhoService } from './carrinho.service';

describe('Service: Carrinho', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarrinhoService]
    });
  });

  it('should ...', inject([CarrinhoService], (service: CarrinhoService) => {
    expect(service).toBeTruthy();
  }));
});
