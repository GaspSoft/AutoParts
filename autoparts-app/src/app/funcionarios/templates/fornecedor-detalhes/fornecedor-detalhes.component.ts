import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FornecedorService } from 'src/app/services/fornecedor/fornecedor.service';

@Component({
  selector: 'app-fornecedor-detalhes',
  templateUrl: './fornecedor-detalhes.component.html',
  styleUrls: ['./fornecedor-detalhes.component.scss']
})
export class FornecedorDetalhesComponent implements OnInit {

  forncedorDetalhado: any;

  constructor(
    private route: ActivatedRoute,
    private service: FornecedorService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      // Use um serviço para buscar os detalhes com base no ID
      this.service.getFuncionarioById(id).subscribe((data) => {
        this.forncedorDetalhado = data;
      });
    });
  }

}
