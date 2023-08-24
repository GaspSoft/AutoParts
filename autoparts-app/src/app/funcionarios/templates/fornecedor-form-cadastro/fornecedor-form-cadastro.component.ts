import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from 'src/app/model/fornecedor/fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor/fornecedor.service';

@Component({
  selector: 'app-fornecedor-form-cadastro',
  templateUrl: './fornecedor-form-cadastro.component.html',
  styleUrls: ['./fornecedor-form-cadastro.component.scss']
})
export class FornecedorFormCadastroComponent {
  fornecedor: Fornecedor;
  sucessoFeedback: boolean = false;
  errorsFeedback?: string = '';
  id?: number;

  constructor(
    private service: FornecedorService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.fornecedor = new Fornecedor();

  }
  ngOnInit(): void {
    this.id = this.service.getFornecedorId()
      if (this.id) {
        this.service.getFuncionarioById(this.id).subscribe(
          response => {
            this.fornecedor = response;
          },
          errorResponse => {
            this.fornecedor = new Fornecedor();
          }
        );
      }

    console.log()
  }

  onSubmit(): void {
    if (this.id) {
      this.service.atualizarFornecedor(this.fornecedor).subscribe(
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
      this.service.cadastrarFornecedor(this.fornecedor).subscribe(
        response => {
          this.sucessoFeedback = true;
          this.errorsFeedback = '';
          this.fornecedor = response;
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
    this.router.navigate(['funcionario/lista-fornecedor']);
  }
}
