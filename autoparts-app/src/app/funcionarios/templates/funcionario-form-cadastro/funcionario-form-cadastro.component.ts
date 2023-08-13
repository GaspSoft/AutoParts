import { FuncionariosService } from './../../../services/funcionario/funcionarios.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Funcionario } from 'src/app/model/funcionario/funcionario';

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

  constructor(
    private service: FuncionariosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.funcionario = new Funcionario();

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

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
    });
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
          this.errorsFeedback = 'Erro ao atualizar o funcionário';
          console.log(errorResponse)
        }
      )
    } else {
      this.service.cadastrar(this.funcionario).subscribe(
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
          this.errorsFeedback = errorResponse.error.errors;
        }
      );
    }
  }
  voltarListagem(): void {
    this.router.navigate(['/funcionario-lista']);
  }
}
