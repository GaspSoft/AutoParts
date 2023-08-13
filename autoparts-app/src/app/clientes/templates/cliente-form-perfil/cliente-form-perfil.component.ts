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
  
  sucessoFeedback: boolean = false;
  errorsFeedback?: string = '';

  constructor(private contatosService: ClientesService) {}

  alterar(): void {
    this.contatosService.alterarCliente(this.cliente).subscribe(
      response => {
        this.cliente = response;
        this.sucessoFeedback = true;
        setTimeout(() => {
          this.sucessoFeedback = false;
        }, 7000);
        this.errorsFeedback = '';

      },
      errorResponse => {
        this.errorsFeedback = errorResponse.error.mensagem;
      }
    );
  }

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
