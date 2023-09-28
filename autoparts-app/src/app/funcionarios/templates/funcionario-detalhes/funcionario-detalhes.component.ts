import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionariosService } from 'src/app/services/funcionario/funcionarios.service';

@Component({
  selector: 'app-funcionario-detalhes',
  templateUrl: './funcionario-detalhes.component.html',
  styleUrls: ['./funcionario-detalhes.component.scss']
})
export class FuncionarioDetalhesComponent implements OnInit {
  funcionarioDetalhado: any;

  constructor(
    private activedRoute: ActivatedRoute,
    private router: Router,
    private service: FuncionariosService
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      const id = params['id'];
      // Use um serviço para buscar os detalhes com base no ID
      this.service.getFuncionarioById(id).subscribe((data) => {
        this.funcionarioDetalhado = data;
      });
    });
  }

  voltarListagem(): void {
    this.router.navigate(['funcionario/lista-funcionario']);
  }
}
