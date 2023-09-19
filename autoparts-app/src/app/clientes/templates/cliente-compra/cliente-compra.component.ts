import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/cliente/clientes.service';
import { PecaService } from 'src/app/services/pecas/peca.service';
import { VendaService } from 'src/app/services/venda/venda.service';

@Component({
  selector: 'app-cliente-compra',
  templateUrl: './cliente-compra.component.html',
  styleUrls: ['./cliente-compra.component.scss']
})
export class ClienteCompraComponent {

    constructor(private router: Router, private pecasService: PecaService, private clienteService: ClientesService, private vendaService: VendaService) { }
}
