import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FornecedorService } from 'src/app/services/fornecedor/fornecedor.service';

@Component({
  selector: 'app-cliente-detalhes',
  templateUrl: './cliente-detalhes.component.html',
  styleUrls: ['./cliente-detalhes.component.scss']
})
export class ClienteDetalhesComponent implements OnInit {
  clienteDetalhado: any;

  constructor(
    private route: ActivatedRoute,
    private service: FornecedorService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      // Use um serviço para buscar os detalhes com base no ID
      this.service.getFuncionarioById(id).subscribe((data) => {
        this.clienteDetalhado = data;
      });
    });
  }
}
