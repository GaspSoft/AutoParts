import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar-funcionario',
  templateUrl: './navbar-funcionario.component.html',
  styleUrls: ['./navbar-funcionario.component.scss']
})
export class NavbarFuncionarioComponent {

  constructor(private router: Router) {
  }

  linkListaFuncionario():void {
    this.router.navigate(['/funcionario']);
  }

  linkListaProduto():void {
    this.router.navigate(['/funcionario']);
  }

  linkListaCliente():void {
    this.router.navigate(['/cliente']);
  }

  linkListaFornecedor():void {
    this.router.navigate(['/fornecedor']);
  }
}
