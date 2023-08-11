import { FuncionariosService } from './../../../services/funcionario/funcionarios.service';
import { Component } from '@angular/core';
import { Funcionario } from 'src/app/model/funcionario/funcionario';

@Component({
  selector: 'app-funcionario-form-cadastro',
  templateUrl: './funcionario-form-cadastro.component.html',
  styleUrls: ['./funcionario-form-cadastro.component.scss']
})
export class FuncionarioFormCadastroComponent {
  funcionario: Funcionario;
  sucessoFeedback: boolean = false;
  errorsFeedback?: string = '';

  constructor(private service: FuncionariosService) {
    this.funcionario = new Funcionario();

  }

  cadastrar(): void {
    this.service.cadastrar(this.funcionario).subscribe(
      response => {
        this.funcionario = response;
        this.sucessoFeedback = true;
        setTimeout(() => {
          this.sucessoFeedback = false;
        }, 7000);
        this.errorsFeedback = '';
        this.funcionario = new Funcionario();
        console.log(response)
      },
      errorResponse => {
        this.errorsFeedback = errorResponse.error.mensagem;
        console.log(errorResponse)
      }
    );
  }
}
