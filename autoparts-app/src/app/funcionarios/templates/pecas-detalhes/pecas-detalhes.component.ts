import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from 'src/app/model/fornecedor/fornecedor';
import { Pecas } from 'src/app/model/pecas/pecas';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';
import { PecaService } from 'src/app/services/pecas/peca.service';

@Component({
  selector: 'app-pecas-detalhes',
  templateUrl: './pecas-detalhes.component.html',
  styleUrls: ['./pecas-detalhes.component.scss']
})
export class PecasDetalhesComponent {
  pecaDetalhado: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: PecaService,
    private router: Router,  private authService: AuthServiceService
  ) {

    const clienteLogado = authService.getAuthUser();
    const tipoUser = authService.getTipoUser();
    if (clienteLogado !== null && tipoUser !== undefined && tipoUser != 'CLIENTE') {}
    else{
      this.router.navigate(['cliente/login']);
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.service.getPecaById(id).subscribe((data) => {
        this.pecaDetalhado = data;
      });
    });
  }

  getFotoUrl(peca: Pecas): string {
    if (peca.base64) {
      return `data:image/jpeg;base64,${peca.base64}`;
    }
    return ''; // Ou uma URL de imagem padrão
  }

  voltarListagem(): void {
    this.router.navigate(['funcionario/lista-pecas']);
  }
}
