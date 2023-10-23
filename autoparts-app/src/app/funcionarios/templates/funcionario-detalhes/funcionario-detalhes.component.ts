import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';
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
    private service: FuncionariosService,
    private authService: AuthServiceService
  ) {
    const clienteLogado = authService.getAuthUser();
    const tipoUser = authService.getTipoUser();
    if (clienteLogado !== null && tipoUser !== undefined && tipoUser == 'GERENTE') {
    } else{
      this.router.navigate(['cliente/login']);

    }
  }

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
