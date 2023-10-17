import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-cliente-carrinho',
  templateUrl: './cliente-carrinho.component.html',
  styleUrls: ['./cliente-carrinho.component.scss']
})
export class ClienteCarrinhoComponent implements OnInit {

  constructor( private authService: AuthServiceService,  private router: Router) {
    const clienteLogado = authService.getAuthUser();
    const tipoUser = authService.getTipoUser();
    if (clienteLogado !== null && tipoUser !== undefined && tipoUser == 'CLIENTE') {}
    else{
      this.router.navigate(['cliente/login']);
    }
  }

  ngOnInit() {
  }

}
