import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pecas } from './../../../model/pecas/pecas';
import { PecaService } from 'src/app/services/pecas/peca.service';

@Component({
  selector: 'app-cliente-catalogo',
  templateUrl: './cliente-catalogo.component.html',
  styleUrls: ['./cliente-catalogo.component.scss']
})
export class ClienteCatalogoComponent implements OnInit {
  pecas: Pecas[] = [];
  searchText = '';

  constructor( private service: PecaService ) { }

  ngOnInit(): void {
    this.service.getPecas().subscribe(
      response => {
        this.pecas = response;
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
