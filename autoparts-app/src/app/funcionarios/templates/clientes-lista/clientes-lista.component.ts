import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente/cliente';
import { ClientesService } from 'src/app/services/cliente/clientes.service';


@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.scss']
})

export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];
  clientesExiste:boolean = false;

  constructor(
    private service: ClientesService,
    private router: Router) { }

  ngOnInit(): void {
    this.service.listarClientes().subscribe(
      response => {
        this.clientes = response;
      }
    )

    this.service.getCliente().subscribe(
      response => {
        this.clientes = response;
        this.clientesExiste = this.clientes.length > 0;
      }
    )
  }

  detalhesCliente(cliente_id: number): void {
    this.service.getClienteById(cliente_id);
    this.router.navigate([`funcionario/detalhes-cliente/${cliente_id}`]);
  }

  formatarCpf(numero: number): string {
    // Verifica se o CPF é válido antes de formatar
    if (!numero) {
      return '';
    }

    // Remove caracteres não numéricos
    const cpf = numero.toString().padStart(11, '0');

    // Aplica a formatação
    return `${cpf.substr(0, 3)}.${cpf.substr(3, 3)}.${cpf.substr(6, 3)}-${cpf.substr(9, 2)}`;
  }
}
