import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Etheme } from 'src/app/enums/Ethemes.enum';

@Component({
  selector: 'navbar-funcionario',
  templateUrl: './navbar-funcionario.component.html',
  styleUrls: ['./navbar-funcionario.component.scss']
})
export class NavbarFuncionarioComponent {
  public iconTheme: string = Etheme.ICON_MOON;
  public body = document.body.classList.toggle('light-theme');

  constructor(private router: Router) {
  }

  linkPainel():void {
    this.router.navigate(['/funcionario/painel']);
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

  public toggle() {
    const body = document.body;

    if (body.classList.contains('light-theme')) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      this.iconTheme = Etheme.ICON_MOON;
    } else if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      this.iconTheme = Etheme.ICON_SUN;
    }
  }
}
