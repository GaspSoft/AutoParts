import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar-cliente',
  templateUrl: './navbar-cliente.component.html',
  styleUrls: ['./navbar-cliente.component.scss']
})

export class NavbarClienteComponent {

  constructor(private router: Router) {
  }

  linkClienteHome():void {
    this.router.navigate(['/cliente/home-cliente']);
  }

  linkClienteCarrinho():void {
    this.router.navigate(['/cliente/carrinho-cliente']);
  }

  linkClienteSobre():void {
    this.router.navigate(['/cliente/sobre-cliente']);
  }

  linkClientePerfil():void {
    this.router.navigate(['/cliente/perfil-cliente']);
  }

  linkClienteAjuda():void {
    this.router.navigate(['/cliente/ajuda-cliente']);
  }
}
