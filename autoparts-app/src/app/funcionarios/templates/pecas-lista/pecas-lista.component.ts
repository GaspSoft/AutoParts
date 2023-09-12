import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pecas } from './../../../model/pecas/pecas';
import { PecaService } from 'src/app/services/pecas/peca.service';

@Component({
  selector: 'app-pecas-lista',
  templateUrl: './pecas-lista.component.html',
  styleUrls: ['./pecas-lista.component.scss']
})
export class PecasListaComponent implements OnInit {
  pecas: Pecas[] = [];
  pecaSelecionada: Pecas = new Pecas();
  pecasExiste:boolean = false;
  feedbackSucesso?:string;
  feedbackErro?:string;

  constructor(
    private service: PecaService,
    private router: Router) { }

  ngOnInit(): void {
    this.service.getPecas().subscribe(
      response => {
        this.pecas = response;
      }
    )

    this.service.getPecas().subscribe(
      response => {
        this.pecas = response;
        this.pecasExiste = this.pecas.length > 0;
      }
    )
  }

  editarPeca(pecas_id: number): void {
    this.service.setPecaId(pecas_id);
    this.router.navigate(['funcionario/alterar-pecas'])
  }

  preparaDelecao(peca: Pecas) {
    this.pecaSelecionada = peca;
  }

  deletarPeca() {
    this.service.deletarPeca(this.pecaSelecionada).subscribe(
      response => {
        this.feedbackSucesso = 'Funcionário deletado com sucesso';
        this.ngOnInit();
      },
      errorResponse => this.feedbackErro = 'Ocorreu um erro ao deletar o funcionário'
    )
  }

  getFotoUrl(peca: Pecas): string {
    if (peca.base64) {
      return `data:image/jpeg;base64,${peca.base64}`;
    }
    return ''; // Ou uma URL de imagem padrão
  }

  novoCadastroPecas() {
    this.router.navigate(['funcionario/cadastro-pecas'])
  }
}
