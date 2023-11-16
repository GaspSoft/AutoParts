import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente/cliente';
import { Venda } from 'src/app/model/venda/venda';
import { VendaService } from 'src/app/services/venda/venda.service';

@Component({
  selector: 'app-historico-venda',
  templateUrl: './historico-venda.component.html',
  styleUrls: ['./historico-venda.component.scss']
})
export class HistoricoVendaComponent implements OnInit {
  vendas: Venda[] = [];
  cliente = new Cliente();
  sucessoFeedback: string = '';
  errorsFeedback?: string = '';
  historicoExiste: boolean = false;

  constructor(
    private service: VendaService) { }

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
