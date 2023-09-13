import { Component, OnInit } from '@angular/core';
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
    private service: ClientesService) { }

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
}
