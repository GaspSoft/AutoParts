import { Component, OnInit } from '@angular/core';
import { Pecas } from 'src/app/model/pecas/pecas';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';
import { PecaService } from 'src/app/services/pecas/peca.service';

@Component({
  selector: 'app-cliente-carrinho',
  templateUrl: './cliente-carrinho.component.html',
  styleUrls: ['./cliente-carrinho.component.scss']
})
export class ClienteCarrinhoComponent implements OnInit {
  pecas: Pecas[] = [];
  carrinho: number[] = [];

  constructor(private service: PecaService, private carrinhoService: CarrinhoService) {
    this.carrinho = this.carrinhoService.listaCarrinho;
  }

  ngOnInit() {
    for (let i = 0; i < this.carrinho.length; i++) {
      const itemId = this.carrinho[i];
      this.service.getPecaById(itemId).subscribe(
        response => {
          this.pecas.push(response);
        }
      );
    }
  }

  getFotoUrl(peca: Pecas): string {
    if (peca.base64) {
      return `data:image/jpeg;base64,${peca.base64}`;
    }
    return ''; // Ou uma URL de imagem padrão
  }
}
