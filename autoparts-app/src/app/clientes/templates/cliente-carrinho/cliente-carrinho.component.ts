import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pecas } from 'src/app/model/pecas/pecas';
import { Venda } from 'src/app/model/venda/venda';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';
import { ClientesService } from 'src/app/services/cliente/clientes.service';
import { PecaService } from 'src/app/services/pecas/peca.service';
import { VendaService } from 'src/app/services/venda/venda.service';

@Component({
  selector: 'app-cliente-carrinho',
  templateUrl: './cliente-carrinho.component.html',
  styleUrls: ['./cliente-carrinho.component.scss'],
})
export class ClienteCarrinhoComponent implements OnInit {
  pecas: Pecas[] = [];
  carrinho: number[] = [];
  venda: Venda;
  peca: Pecas;
  sucessoFeedback: string = '';
  errorsFeedback?: string = '';

  constructor(
    private service: PecaService,
    private carrinhoService: CarrinhoService,
    private clienteService: ClientesService,
    private vendaService: VendaService
  ) {
    this.carrinho = this.carrinhoService.listaCarrinho;
    this.venda = new Venda();
    this.peca = new Pecas();
  }

  ngOnInit() {
    this.pecas = [];
    this.carrinhoService.listaCarrinho.forEach((itemId) => {
      this.service.getPecaById(itemId).subscribe((response) => {
        this.pecas.push(response);
      });
    });
  }

  getFotoUrl(peca: Pecas): string {
    if (peca.base64) {
      return `data:image/jpeg;base64,${peca.base64}`;
    }
    return ''; // Ou uma URL de imagem padrão
  }

  removeCarrinho(index: number) {
    if (index >= 0 && index < this.pecas.length) {
      this.carrinho.splice(index, 1);
      this.ngOnInit();
    }
  }

  async comprarItens() {
    // for (const peca of this.carrinho) {
    //   const pecaSelecionada = this.pecas[peca];

    //   if (pecaSelecionada && pecaSelecionada.fornecedor) {
    //     this.venda.peca.pecas_id = peca;
    //     this.venda.peca.fornecedor.fornecedor_id =
    //       pecaSelecionada.fornecedor.fornecedor_id;
    //     console.log(peca);
    //     try {
    //       const response = await this.vendaService
    //         .cadastrarVenda(this.venda)
    //         .toPromise();
    //       this.sucessoFeedback = response.mensagem;
    //       setTimeout(() => {
    //         this.sucessoFeedback = '';
    //       }, 7000);

    //       this.errorsFeedback = '';
    //       this.venda = new Venda();
    //       console.log(response);

    //       const index = this.carrinho.indexOf(peca);
    //       if (index !== -1) {
    //         this.carrinho.splice(index, 1);
    //       }
    //       this.ngOnInit();
    //     } catch (errorResponse: any) {
    //       this.errorsFeedback = errorResponse.error.mensagem;
    //       this.peca = new Pecas();
    //     }
    //   }
    // }
  }
}
