import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'navbar-cliente',
  templateUrl: './navbar-cliente.component.html',
  styleUrls: ['./navbar-cliente.component.scss']
})

export class NavbarClienteComponent {

  constructor(private router: Router, private authService: AuthServiceService) {
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

  logoff(){
    this.authService.clearAuthUser();
    this.router.navigate(['/cliente/login']);
  }
}
