import { Fornecedor } from './../../../model/fornecedor/fornecedor';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FornecedorService } from 'src/app/services/fornecedor/fornecedor.service';

@Component({
  selector: 'app-fornecedores-lista',
  templateUrl: './fornecedores-lista.component.html',
  styleUrls: ['./fornecedores-lista.component.scss']
})
export class FornecedoresListaComponent {
  fornecedores: Fornecedor[] = [];
  fornecedorSelecionado: Fornecedor = new Fornecedor();
  fornecedoresExiste:boolean = false;
  sucessoFeedback: boolean = false;
  errorsFeedback?: string = '';

  constructor(
    private service: FornecedorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getFornecedor().subscribe(
      response => {
        this.fornecedores = response;
      }
    )

    this.service.getFornecedor().subscribe(
      response => {
        this.fornecedores = response;
        this.fornecedoresExiste = this.fornecedores.length > 0;
      }
    )
  }

  editarFornecedor(funcionario_id: number): void {
    this.service.setFornecedorId(funcionario_id);
    this.router.navigate(['funcionario/alterar-fornecedor'])
  }

  novoCadastroFornecedor(): void {
    this.service.setFornecedorId(0);
    this.router.navigate(['funcionario/cadastro-fornecedor'])
  }

  preparaDelecao(fornecedor: Fornecedor) {
    this.fornecedorSelecionado = fornecedor;
  }

  deletarFornecedor() {
    this.service.deletarFornecedor(this.fornecedorSelecionado).subscribe(
      response => {
        this.sucessoFeedback = true;
        this.errorsFeedback = '';
        setTimeout(() => {
          this.sucessoFeedback = false;
        }, 7000);
        this.ngOnInit();
      },
      errorResponse => {
        this.errorsFeedback = errorResponse.error.mensagem;
        setTimeout(() => {
          this.errorsFeedback = '';
        }, 7000);
      }
    )
  }
}
