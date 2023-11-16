import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent {

  constructor(private router: Router) {
  }

  linkListaFuncionario():void {
    this.router.navigate(['/funcionario/lista-funcionario']);
  }

  linkListaProduto():void {
    this.router.navigate(['/funcionario/lista-pecas']);
  }

  linkListaCliente():void {
    this.router.navigate(['/funcionario/lista-cliente']);
  }

  linkListaFornecedor():void {
    this.router.navigate(['/funcionario/lista-fornecedor']);
  }

  linkListaHistorico():void {
    this.router.navigate(['/funcionario/historico']);
  }
}
