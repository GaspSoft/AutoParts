import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente/cliente';
import { Pecas } from 'src/app/model/pecas/pecas';
import { Venda } from 'src/app/model/venda/venda';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';
import { ClientesService } from 'src/app/services/cliente/clientes.service';
import { VendaService } from 'src/app/services/venda/venda.service';

@Component({
  selector: 'app-cliente-historico',
  templateUrl: './cliente-historico.component.html',
  styleUrls: ['./cliente-historico.component.scss']
})
export class ClienteHistoricoComponent implements OnInit {
  vendas: Venda[] = [];
  cliente = new Cliente();
  sucessoFeedback: string = '';
  errorsFeedback?: string = '';
  historicoExiste: boolean = false;

  constructor(
    private service: VendaService,
    private router: Router, 
    private authService: AuthServiceService
    ) {
      const clienteLogado = authService.getAuthUser();
      const tipoUser = authService.getTipoUser();
      
      if (clienteLogado !== null && tipoUser !== undefined && tipoUser == 'CLIENTE') {
        this.cliente = clienteLogado;
      } else{
        this.router.navigate(['cliente/login']);
      }
   }

  ngOnInit(): void {
    this.service.listarHistorico().subscribe(
      response => {
        this.vendas = response;
      }
    )

    this.service.listarHistorico().subscribe(
      response => {
        this.vendas = response;
        this.historicoExiste = this.vendas.length > 0;
      }
    )
  }
}
