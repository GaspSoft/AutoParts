  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import { Cliente } from 'src/app/model/cliente/cliente';
  import { Pecas } from 'src/app/model/pecas/pecas';
  import { Venda } from 'src/app/model/venda/venda';
  import { AuthServiceService } from 'src/app/services/auth/auth-service.service';
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
    cliente: Cliente;
    sucessoFeedback: string = '';
    errorsFeedback?: string = '';
    precoTotal: number = 0;

    constructor(
      private service: PecaService,
      private carrinhoService: CarrinhoService,
      private clienteService: ClientesService,
      private vendaService: VendaService,
      private authService: AuthServiceService,
      private router: Router,
      private cienteService: ClientesService) {
      this.carrinho = this.carrinhoService.listaCarrinho;
      this.venda = new Venda();
      this.peca = new Pecas();
      this.cliente = new Cliente;

      const clienteLogado = authService.getAuthUser();
      const tipoUser = authService.getTipoUser();

      if (clienteLogado !== null && tipoUser !== undefined && tipoUser == 'CLIENTE') {
        this.cliente = clienteLogado;
      }
      else{
        this.router.navigate(['cliente/login']);
      }
    }

    ngOnInit() {
      this.pecas = [];
      this.precoTotal = 0;

      let carrinho: any = localStorage.getItem('carrinho');
      let convCarrinho = JSON.parse(carrinho);

      for (let i = 0; i < convCarrinho.length; i++) {
        let valueCarrinho = convCarrinho[i];

        this.service.getPecaById(valueCarrinho).subscribe((response) => {
          this.pecas.push(response);

          if (response.preco !== undefined) {
            this.precoTotal += response.preco;
          }
        });
      }
    }

    getFotoUrl(peca: Pecas): string {
      if (peca.base64) {
        return `data:image/jpeg;base64,${peca.base64}`;
      }
      return ''; // Ou uma URL de imagem padrão
    }

    removeCarrinho(i: any) {
      let carrinho: any = localStorage.getItem('carrinho');
      let convCarrinho = JSON.parse(carrinho);

      const index = convCarrinho.indexOf(i);
      convCarrinho.splice(index, 1);
      localStorage.setItem('carrinho', JSON.stringify(convCarrinho));
      this.ngOnInit();
    }

    async comprarItens() { // ARRUMAR ESTÁ EXCLUIDO UM ÚNICO ITEM
      let carrinho: any = localStorage.getItem('carrinho');
      let convCarrinho = JSON.parse(carrinho);

      for (let i = 0; i < convCarrinho.length; i++) {
        const pecaId = Number(convCarrinho[i]);
        const pecaSelecionada = this.pecas[this.peca.pecas_id];
        console.log(typeof(pecaId));
        console.log(typeof(pecaSelecionada));
        console.log(pecaId);
        console.log(pecaSelecionada);
        console.log("TAMANHOOOOOOOOOOO",convCarrinho.length);


        if (pecaId && pecaSelecionada.fornecedor) {
          this.venda.cliente.cliente_id = this.cliente.cliente_id;
          this.venda.peca.pecas_id = pecaId;
          this.venda.peca.fornecedor.fornecedor_id = pecaSelecionada.fornecedor.fornecedor_id;

          try {
            const response = await this.vendaService
              .cadastrarVenda(this.venda)
              .toPromise();
            this.sucessoFeedback = response.mensagem;
            setTimeout(() => {
              this.sucessoFeedback = '';
            }, 7000);

            this.errorsFeedback = '';
            this.venda = new Venda();
            console.log(response);

            const index = convCarrinho.indexOf(i);
            convCarrinho.splice(index, 1);
            localStorage.setItem('carrinho', JSON.stringify(convCarrinho));

          } catch (errorResponse: any) {
            this.errorsFeedback = errorResponse.error.mensagem;
            this.peca = new Pecas();
          }
        }
      }
      this.ngOnInit();
    }
  }
