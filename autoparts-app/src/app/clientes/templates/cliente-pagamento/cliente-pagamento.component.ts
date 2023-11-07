import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Cliente } from "src/app/model/cliente/cliente";
import { Pecas } from "src/app/model/pecas/pecas";
import { Venda } from "src/app/model/venda/venda";
import { AuthServiceService } from "src/app/services/auth/auth-service.service";
import { CarrinhoService } from "src/app/services/carrinho/carrinho.service";
import { ClientesService } from "src/app/services/cliente/clientes.service";
import { PecaService } from "src/app/services/pecas/peca.service";
import { VendaService } from "src/app/services/venda/venda.service";


@Component({
  selector: 'app-cliente-pagamento',
  templateUrl: './cliente-pagamento.component.html',
  styleUrls: ['./cliente-pagamento.component.scss']
})
export class ClientePagamentoComponent implements OnInit {
  inputCartao: string = '';
  inputTitular: string = '';
  inputValidade: string = '';
  inputCVV: string = '';
  maskCartao: string = "#### #### #### ####";
  mostrarCartao: boolean = false;
  tipoCartao: string = '';
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

  formatCartao() {
    const nums = this.inputCartao.replace(/\D/g, '');

    const maxTamanho = 16;
    if (nums.length > maxTamanho) {
      this.inputCartao = this.inputCartao.substring(0, maxTamanho);
      return;
    }

    const reMaxTamanho = maxTamanho - nums.length;
    const maskedValue = nums + '#'.repeat(reMaxTamanho);

    this.maskCartao = '';
    for (let i = 0; i < maxTamanho; i += 4) {
      this.maskCartao += maskedValue.substring(i, i + 4) + ' ';
    }
  }

  formatTitular() {
    let text = this.inputTitular;
    text = text.replace(/[^a-zA-Z\s]/g, '');
    const maxTamanho = 28;

    if (text.length > maxTamanho) {
      text = text.substring(0, maxTamanho);
    }

    this.inputTitular = text;
  }

  noNumbers(event: KeyboardEvent) {
    const chave = event.key;


    if (/^\d$/.test(chave)) {
      event.preventDefault();
    }
  }

  formatValidade() {
    let text = this.inputValidade;

    if (text.length >= 2 && text.charAt(2) !== '/') {
      text = text.substring(0, 2) + '/' + text.substring(2);
    }

    this.inputValidade = text;
  }

  onCartao(option: string) {
    this.tipoCartao = option;
  }

  async comprarItens() {
    let carrinho: any = localStorage.getItem('carrinho');
    let convCarrinho = JSON.parse(carrinho);

    for (let i = 0; i < convCarrinho.length; i++) {
      const pecaId = Number(convCarrinho[i]);
      const pecaSelecionada = this.pecas[this.peca.pecas_id];

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
          } catch (errorResponse: any) {
            this.errorsFeedback = errorResponse.error.mensagem;
            this.peca = new Pecas();
          }
        }
      }

    convCarrinho = [];
    localStorage.setItem('carrinho', JSON.stringify(convCarrinho));

    this.ngOnInit();
  }
}
