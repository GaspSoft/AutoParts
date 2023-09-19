import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  funcionarioExiste:boolean = false;
  feedbackSucesso?:string;
  feedbackErro?:string;
  searchText = '';

  constructor(
    private service: FuncionariosService,
    private router: Router,
    private funcionariosService: FuncionariosService,
    ) { }

  ngOnInit(): void {
    this.service.getFuncionarios().subscribe(
      response => {
        this.funcionarios = response;
      }
    )

    this.service.getFuncionarios().subscribe(
      response => {
        this.funcionarios = response;
        this.funcionarioExiste = this.funcionarios.length > 0;
      }
    )
  }

  editarFuncionario(funcionario_id: number): void {
    this.service.setFuncionarioId(funcionario_id);
    this.router.navigate(['funcionario/alterar-funcionario'])
  }

  novoCadastroFuncionario(): void {
    this.service.setFuncionarioId(0);
    this.router.navigate(['funcionario/cadastro-funcionario'])
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


  formatarCpf(numero: number): string {
    // Verifica se o CPF é válido antes de formatar
    if (!numero) {
      return '';
    }

    // Remove caracteres não numéricos
    const cpf = numero.toString().padStart(11, '0');

    // Aplica a formatação
    return `${cpf.substr(0, 3)}.${cpf.substr(3, 3)}.${cpf.substr(6, 3)}-${cpf.substr(9, 2)}`;
  }
}
