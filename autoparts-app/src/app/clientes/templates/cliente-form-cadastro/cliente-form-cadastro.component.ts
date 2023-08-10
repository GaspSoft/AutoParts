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

  constructor(private service: ClientesService) {
    this.cliente = new Cliente();

  }

  onSubmit(): void {
    this.service.cadastrar(this.cliente).subscribe(
      response => {
        this.cliente = response;
      },
    );
  }
}
