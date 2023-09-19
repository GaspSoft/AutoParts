import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pecas } from 'src/app/model/pecas/pecas';
import { PecaService } from 'src/app/services/pecas/peca.service';

@Component({
  selector: 'app-cliente-home',
  templateUrl: './cliente-home.component.html',
  styleUrls: ['./cliente-home.component.scss']
})
export class ClienteHomeComponent implements OnInit {

  pecas: Pecas[] = [];

  constructor(private router: Router, private service: PecaService) {
  }

  ngOnInit() {
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

  linkClienteSobre():void {
    this.router.navigate(['/cliente/sobre']);
  }

}
