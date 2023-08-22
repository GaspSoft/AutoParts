import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pecas } from 'src/app/model/pecas/pecas';
import { PecaService } from 'src/app/services/pecas/peca.service';

@Component({
  selector: 'app-pecas-lista',
  templateUrl: './pecas-lista.component.html',
  styleUrls: ['./pecas-lista.component.scss']
})
export class PecasListaComponent {
  constructor(
    private service: PecaService,
    private router: Router) { }

  pecas: Pecas[] = [];

  ngOnInit(): void {
    this.service.listarPecas().subscribe(
      (data) => {
        this.pecas = data;
      },
      (error) => {
        console.log(error);
      }
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
