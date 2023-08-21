import { Component, OnInit } from '@angular/core';
import { Pecas } from 'src/app/model/pecas/pecas';
import { PecaService } from 'src/app/services/pecas/peca.service';
@Component({
  selector: 'app-pecas-listagem',
  templateUrl: './pecas-listagem.component.html',
  styleUrls: ['./pecas-listagem.component.scss']
})
export class PecasListagemComponent implements OnInit{
  constructor(private pecaService: PecaService) { }

  pecas: Pecas[] = [];

  ngOnInit(): void {
    this.pecaService.listarPecas().subscribe(
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
  
  
}
