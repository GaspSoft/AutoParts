import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Etheme } from 'src/app/enums/Ethemes.enum';

@Component({
  selector: 'navbar-cliente',
  templateUrl: './navbar-cliente.component.html',
  styleUrls: ['./navbar-cliente.component.scss']
})

export class NavbarClienteComponent {
  public iconTheme: string = Etheme.ICON_MOON;
  public textTheme: string = Etheme.TEXT_MOON;
  public body = document.body.classList.toggle('light-theme');

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

  public toggle() {
    const body = document.body;

    if (body.classList.contains('light-theme')) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      this.textTheme = Etheme.TEXT_MOON;
      this.iconTheme = Etheme.ICON_MOON;
    } else if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      this.textTheme = Etheme.TEXT_SUN;
      this.iconTheme = Etheme.ICON_SUN;
    }
  }
}
