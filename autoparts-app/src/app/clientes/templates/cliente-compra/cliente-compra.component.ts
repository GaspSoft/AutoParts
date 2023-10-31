import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/model/cliente/cliente';
import { Pecas } from 'src/app/model/pecas/pecas';
import { Pessoa } from 'src/app/model/pessoa/pessoa';
import { Venda } from 'src/app/model/venda/venda';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';
import { ClientesService } from 'src/app/services/cliente/clientes.service';
import { LoginService } from 'src/app/services/login/login.service';
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
  cliente: Cliente;
  carrinho: number[] = [];
  sucessoFeedback: string = '';
  errorsFeedback?: string = '';
  pessoa: Pessoa;

  constructor(private router: Router, 
    private ActivatedRoute: ActivatedRoute, 
    private pecasService: PecaService, 
    private clienteService: ClientesService, 
    private vendaService: VendaService, 
    private carrinhoService: CarrinhoService,
    private authService: AuthServiceService,
    private service: LoginService) {
    this.venda = new Venda();
    this.peca = new Pecas();
    this.cliente = new Cliente;
    this.carrinho = this.carrinhoService.listaCarrinho;
    this.pessoa = new Pessoa();

    const clienteLogado = authService.getAuthUser();
    const tipoUser = authService.getTipoUser();

    if (clienteLogado !== null && tipoUser !== undefined && tipoUser == 'CLIENTE') {
      this.cliente = clienteLogado;
    } else{
      this.router.navigate(['cliente/login']);
    }
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
  }

  addCarrinho() {
    if (this.itemID && this.carrinho.indexOf(this.itemID) === -1) {
      this.carrinho.push(this.itemID);
      var carrinhoJson = JSON.stringify(this.carrinho);
      localStorage.setItem('carrinho', carrinhoJson);
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
