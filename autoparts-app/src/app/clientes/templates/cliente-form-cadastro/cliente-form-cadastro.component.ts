import { Component } from '@angular/core';
import { Cliente } from 'src/app/model/cliente/cliente';
import { ClientesService } from 'src/app/services/cliente/clientes.service';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';
import { CepService } from 'src/app/services/cep/cep.service';

@Component({
  selector: 'cliente-form-cadastro',
  templateUrl: './cliente-form-cadastro.component.html',
  styleUrls: ['./cliente-form-cadastro.component.scss']
})
export class ClienteFormCadastroComponent {
  cliente: Cliente;
  estados: any = [];
  sucessoFeedback: boolean = false;
  errorsFeedback?: string = '';

  constructor(private service: ClientesService, private router: Router, private authService: AuthServiceService, private cepService: CepService) {
    enum TipoPessoa {
      CLIENTE
    }
    this.cliente = new Cliente();
    this.cliente.tipoPessoa = TipoPessoa.CLIENTE;

    this.estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']

    const clienteLogado = authService.getAuthUser();
    if (clienteLogado != null ) {
      this.router.navigate(['cliente/login']);
    }
  }

  cadastrar(): void {
    this.service.cadastrarCliente(this.cliente).subscribe(
      response => {
        this.cliente = response;
        this.sucessoFeedback = true;
        setTimeout(() => {
          this.sucessoFeedback = false;
        }, 7000);
        this.errorsFeedback = '';
        this.cliente = new Cliente();
        this.router.navigate(['cliente/login']);
      },
      errorResponse => {
        this.errorsFeedback = errorResponse.error.mensagem;
      }
    );
  }

  consultaCEP(valor: any, form: any) {
    this.cepService.buscarCEP(valor).subscribe((dados) => this.popularForm(dados, form));
  }

  popularForm(dados: any, form: any) {
    form.setValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    return filterValue;
}

  linkClienteLogin():void {
    this.router.navigate(['/cliente/login']);
  }


}
