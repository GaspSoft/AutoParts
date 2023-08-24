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
  constructor(
    private service: PecaService,
    private router: Router) { }

  pecas: Pecas[] = [];
  pecaSelecionada: Pecas = new Pecas();
  feedbackSucesso?:string;
  feedbackErro?:string;

  ngOnInit(): void {
    this.service.getPeca().subscribe(
      response => {
        this.pecas = response;
      }
    )
  }

  editarPeca(pecas_id: number): void {
    this.service.setPecaId(pecas_id);
    this.router.navigate(['funcionario/alterar-pecas'])
  }

  preparaDelecao(pecas: Pecas) {
    this.pecaSelecionada = pecas;
  }

  deletarPeca() {
    this.service.deletarPeca(this.pecaSelecionada).subscribe(
      response => {
        this.feedbackSucesso = 'Peça deletado com sucesso';
        this.ngOnInit();
      },
      errorResponse => this.feedbackErro = 'Ocorreu um erro ao deletar a peça'
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
