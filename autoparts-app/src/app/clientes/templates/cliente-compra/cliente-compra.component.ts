import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pecas } from 'src/app/model/pecas/pecas';
import { Venda } from 'src/app/model/venda/venda';
import { ClientesService } from 'src/app/services/cliente/clientes.service';
import { PecaService } from 'src/app/services/pecas/peca.service';
import { VendaService } from 'src/app/services/venda/venda.service';

@Component({
  selector: 'app-cliente-compra',
  templateUrl: './cliente-compra.component.html',
  styleUrls: ['./cliente-compra.component.scss']
})
export class ClienteCompraComponent implements OnInit{
  venda: Venda;
  peca: Pecas;
  id: number;
    constructor(private router: Router, private pecasService: PecaService, private clienteService: ClientesService, private vendaService: VendaService) { 
      this.venda = new Venda();
      this.peca = new Pecas();
      this.id = 1;
    }
  ngOnInit(): void {
    this.pecasService.getPecaById(this.id).subscribe(
      response => {
        this.peca = response;
      }
    )
    
  }

    

}
