import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  listaCarrinho: number[] = [];
  
  constructor() { }

}
