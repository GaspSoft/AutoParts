import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Etheme } from 'src/app/enums/Ethemes.enum';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'navbar-funcionario',
  templateUrl: './navbar-funcionario.component.html',
  styleUrls: ['./navbar-funcionario.component.scss']
})
export class NavbarFuncionarioComponent {
  public iconTheme: string = Etheme.ICON_MOON;

  constructor(private router: Router, private authService: AuthServiceService) {
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

    if (!body.classList.contains('dark-theme')) {
      body.classList.add('dark-theme');
      this.iconTheme = Etheme.ICON_MOON;
    } else if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      this.iconTheme = Etheme.ICON_SUN;
    }
  }

  logoff(){
    this.authService.clearAuthUser();
    this.router.navigate(['/cliente/login']);
  }
}
