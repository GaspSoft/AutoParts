import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente/cliente';
import { ClientesService } from 'src/app/services/cliente/clientes.service';

@Component({
  selector: 'app-cliente-form-perfil',
  templateUrl: './cliente-form-perfil.component.html',
  styleUrls: ['./cliente-form-perfil.component.scss']
})
export class ClienteFormPerfilComponent implements OnInit {
  cliente = new Cliente();

  constructor(private contatosService: ClientesService) {}

  ngOnInit(): void {
    const clientId = 7; // Replace with the desired ID
    this.contatosService.listarCliente(clientId).subscribe(
      cliente => {
        this.cliente = cliente;
      },
      error => {
        console.error('Erro ao carregar o cliente:', error);
      }
    );
  }
}
