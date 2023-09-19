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

  linkClienteCatalogo():void {
    this.router.navigate(['/cliente/catalogo']);
  }

  linkClienteHome():void {
    this.router.navigate(['/cliente/home']);
  }

  linkClienteCarrinho():void {
    this.router.navigate(['/cliente/carrinho']);
  }

  linkClienteSobre():void {
    this.router.navigate(['/cliente/sobre']);
  }

  linkClientePerfil():void {
    this.router.navigate(['/cliente/perfil']);
  }

  linkClienteAjuda():void {
    this.router.navigate(['/cliente/ajuda']);
  }
}
