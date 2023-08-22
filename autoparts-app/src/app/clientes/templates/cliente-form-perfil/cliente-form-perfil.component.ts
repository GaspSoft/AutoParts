import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente/cliente';
import { Endereco } from 'src/app/model/endereco/endereco';
import { ClientesService } from 'src/app/services/cliente/clientes.service';

@Component({
  selector: 'app-cliente-form-perfil',
  templateUrl: './cliente-form-perfil.component.html',
  styleUrls: ['./cliente-form-perfil.component.scss']
})
export class ClienteFormPerfilComponent implements OnInit {
  cliente = new Cliente();
  endereco = new Endereco(); 
  clientId : number = 3;

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

  alterarEndereco(): void {
    this.contatosService.alterarEndereco(this.clientId, this.endereco).subscribe(
      response => {
        this.endereco = this.endereco;
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


  excluirCliente(): void {

    if (confirm('Tem certeza que deseja excluir este cliente?')) {
      this.contatosService.excluirCliente(this.clientId).subscribe(
        () => {
          // Lógica para lidar com a exclusão bem-sucedida, se necessário
        },
        errorResponse => {
          console.error('Erro ao excluir cliente:', errorResponse);
        }
      );
    }
  }

  ngOnInit(): void {
    this.contatosService.listarCliente(this.clientId).subscribe(
      cliente => {
        this.cliente = cliente;
        this.endereco = cliente.endereco
      },
      error => {
        console.error('Erro ao carregar o cliente:', error);
      }
    );
  }
}
