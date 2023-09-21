import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/services/cliente/clientes.service';

@Component({
  selector: 'app-cliente-detalhes',
  templateUrl: './cliente-detalhes.component.html',
  styleUrls: ['./cliente-detalhes.component.scss']
})
export class ClienteDetalhesComponent implements OnInit {
  clienteDetalhado: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ClientesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      // Use um serviço para buscar os detalhes com base no ID
      this.service.getClienteById(id).subscribe((data) => {
        this.clienteDetalhado = data;
      });
    });
  }

  voltarListagem(): void {
    this.router.navigate(['funcionario/lista-cliente']);
  }
}
