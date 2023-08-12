import { Component } from '@angular/core';
import { Cliente } from 'src/app/model/cliente/cliente';
import { ClientesService } from 'src/app/services/cliente/clientes.service';

@Component({
  selector: 'cliente-form-cadastro',
  templateUrl: './cliente-form-cadastro.component.html',
  styleUrls: ['./cliente-form-cadastro.component.scss']
})
export class ClienteFormCadastroComponent {
  cliente: Cliente;
  sucessoFeedback: boolean = false;
  errorsFeedback?: string = '';

  constructor(private service: ClientesService) {
    this.cliente = new Cliente();

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
      },
      errorResponse => {
        this.errorsFeedback = errorResponse.error.mensagem;
      }
    );
  }
}
