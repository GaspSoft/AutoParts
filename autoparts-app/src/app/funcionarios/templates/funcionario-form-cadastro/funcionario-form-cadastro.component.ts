import { FuncionariosService } from './../../../services/funcionario/funcionarios.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Funcionario } from 'src/app/model/funcionario/funcionario';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-funcionario-form-cadastro',
  templateUrl: './funcionario-form-cadastro.component.html',
  styleUrls: ['./funcionario-form-cadastro.component.scss']
})
export class FuncionarioFormCadastroComponent implements OnInit {
  funcionario: Funcionario;
  sucessoFeedback: boolean = false;
  errorsFeedback?: string = '';
  id?: number;
  senhaVisivel = false;
  constructor(
    private service: FuncionariosService,
    private activatedRoute: ActivatedRoute,
    private router: Router, private authService: AuthServiceService
  ) {
    this.funcionario = new Funcionario();
    const clienteLogado = authService.getAuthUser();
    const tipoUser = authService.getTipoUser();
    if (clienteLogado !== null && tipoUser !== undefined && tipoUser == 'GERENTE') {
    } else{
      this.router.navigate(['cliente/login']);

    }

  }
  visualSenha() {
    this.senhaVisivel = !this.senhaVisivel;
  }

  ngOnInit(): void {
    this.id = this.service.getFuncionarioId()
    if (this.id) {
      this.service.getFuncionarioById(this.id).subscribe(
        response => {
          this.funcionario = response;
        },
        errorResponse => {
          this.funcionario = new Funcionario();
        }
      );
    }

    console.log()
  }

  onSubmit(): void {
    if (this.id) {
      this.service.atualizarFuncionario(this.funcionario).subscribe(
        resposne => {
          this.sucessoFeedback = true;
          this.errorsFeedback = '';
          setTimeout(() => {
            this.sucessoFeedback = false;
          }, 7000);
        },
        errorResponse => {
          this.errorsFeedback = errorResponse.error.mensagem;
        }
      )
    } else {
      this.service.cadastrarFuncionario(this.funcionario).subscribe(
        response => {
          this.sucessoFeedback = true;
          this.errorsFeedback = '';
          this.funcionario = response;
          setTimeout(() => {
            this.sucessoFeedback = false;
          }, 7000);
        },
        errorResponse => {
          this.sucessoFeedback = false;
          this.errorsFeedback = errorResponse.error.mensagem;
        }
      );
    }
  }

  voltarListagem(): void {
    this.router.navigate(['funcionario/lista-funcionario']);
  }
}
