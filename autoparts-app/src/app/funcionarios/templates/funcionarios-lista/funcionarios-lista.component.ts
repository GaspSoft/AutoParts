import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/model/funcionario/funcionario';
import { FuncionariosService } from 'src/app/services/funcionario/funcionarios.service';

@Component({
  selector: 'app-funcionarios-lista',
  templateUrl: './funcionarios-lista.component.html',
  styleUrls: ['./funcionarios-lista.component.scss']
})
export class FuncionariosListaComponent implements OnInit {
  funcionarios: Funcionario[] = [];
  funcionarioSelecionado: Funcionario = new Funcionario();
  feedbackSucesso?:string;
  feedbackErro?:string;

  constructor(
    private service: FuncionariosService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.service.getFuncionarios().subscribe(
      response => {
        this.funcionarios = response;
      }
    )
  }

  editarFuncionario(funcionario_id: number): void {
    this.service.setFuncionarioId(funcionario_id);
    this.router.navigate(['funcionario/alterar'])
  }

  novoCadastroFuncionario(): void {
    this.service.setFuncionarioId(0);
    this.router.navigate(['funcionario/cadastrar'])
  }

  preparaDelecao(funcionario: Funcionario) {
    this.funcionarioSelecionado = funcionario;
  }

  deletarFuncionario() {
    this.service.deletarFuncionario(this.funcionarioSelecionado).subscribe(
      response => {
        this.feedbackSucesso = 'Funcionário deletado com sucesso';
        this.ngOnInit();
      },
      errorResponse => this.feedbackErro = 'Ocorreu um erro ao deletar o funcionário'
    )
  }
}
