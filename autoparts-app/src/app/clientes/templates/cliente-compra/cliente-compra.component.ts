import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pecas } from 'src/app/model/pecas/pecas';
import { Venda } from 'src/app/model/venda/venda';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';
import { ClientesService } from 'src/app/services/cliente/clientes.service';
import { PecaService } from 'src/app/services/pecas/peca.service';
import { VendaService } from 'src/app/services/venda/venda.service';

@Component({
  selector: 'app-cliente-compra',
  templateUrl: './cliente-compra.component.html',
  styleUrls: ['./cliente-compra.component.scss']
})
export class ClienteCompraComponent implements OnInit {
  venda: Venda;
  peca: Pecas;
  id?: number;
  itemID: any;
  carrinho: number[] = [];
  sucessoFeedback: string = '';
  errorsFeedback?: string = '';

  constructor(private router: Router, 
    private ActivatedRoute: ActivatedRoute, 
    private pecasService: PecaService, 
    private clienteService: ClientesService, 
    private vendaService: VendaService, 
    private carrinhoService: CarrinhoService) {
    this.venda = new Venda();
    this.peca = new Pecas();
    this.carrinho = this.carrinhoService.listaCarrinho;
  }
  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe(params => {
      this.itemID = params.get('id');
    });
    this.pecasService.getPecaById(this.itemID).subscribe(
      response => {
        this.peca = response;
        if(this.peca.quantidade <= 0){
          this.errorsFeedback = `Peça ${this.peca.nome} sem estoque`
          this.peca = new Pecas;
        }
      }
    )
    console.log(this.itemID);
  }

  // cadastrarVenda(){

  //   this.venda.cliente.cliente_id = 1;
  //   this.venda.peca.pecas_id = this.peca.pecas_id;
  //   this.venda.peca.fornecedor.fornecedor_id = this.peca.fornecedor.fornecedor_id;
  //   this.vendaService.cadastrarVenda(this.venda).subscribe(
  //     response => {
  //       this.sucessoFeedback = response.mensagem;
  //       setTimeout(() => {
  //         this.sucessoFeedback = '';
  //       }, 7000);
  //       this.errorsFeedback = '';
  //       this.venda = new Venda();
  //       console.log(response)
  //     },
  //     errorResponse => {
  //       this.errorsFeedback = errorResponse.error.mensagem;
  //       this.peca = new Pecas();
  //     }
  //   );
  // }

  addCarrinho() {
    if (this.itemID && this.carrinho.indexOf(this.itemID) === -1) {
      this.carrinho.push(this.itemID);
      this.sucessoFeedback = 'Peça adicionada ao Carrinho!';
    } else {
      this.errorsFeedback = 'Não foi possível adicionadar a Peça ao Carrinho!';
    }
  }

  getFotoUrl(peca: Pecas): string {
    if (peca.base64) {
      return `data:image/jpeg;base64,${peca.base64}`;
    }
    return ''; // Ou uma URL de imagem padrão
  }

  voltarCatalogo(): void {
    this.router.navigate(['cliente/catalogo']);
  }
}
