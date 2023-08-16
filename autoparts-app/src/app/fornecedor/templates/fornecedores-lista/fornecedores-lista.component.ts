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
  feedbackSucesso?: string;
  feedbackErro?: string;

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
  }

  editarFornecedor(funcionario_id: number): void {
    this.service.setFornecedorId(funcionario_id);
    this.router.navigate(['fornecedor/alterar'])
  }

  novoCadastroFornecedor(): void {
    this.service.setFornecedorId(0);
    this.router.navigate(['fornecedor/cadastrar'])
  }

  preparaDelecao(fornecedor: Fornecedor) {
    this.fornecedorSelecionado = fornecedor;
  }

  deletarFuncionario() {
    this.service.deletarFornecedor(this.fornecedorSelecionado).subscribe(
      response => {
        this.feedbackSucesso = 'Funcionário deletado com sucesso';
        this.ngOnInit();
      },
      errorResponse => this.feedbackErro = 'Ocorreu um erro ao deletar o funcionário'
    )
  }
}
