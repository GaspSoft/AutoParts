import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/services/cliente/clientes.service';

@Component({
  selector: 'app-cliente-detalhes',
  templateUrl: './cliente-detalhes.component.html',
  styleUrls: ['./cliente-detalhes.component.scss']
})
export class ClienteDetalhesComponent implements OnInit {
  clienteDetalhado: any;

  constructor(
    private route: ActivatedRoute,
    private service: ClientesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      // Use um serviço para buscar os detalhes com base no ID
      this.service.getClienteById(id).subscribe((data) => {
        this.clienteDetalhado = data;
      });
    });
  }
}
