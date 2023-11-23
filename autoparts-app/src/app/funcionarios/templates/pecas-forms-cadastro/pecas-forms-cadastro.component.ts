import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pecas } from 'src/app/model/pecas/pecas';
import { PecaService } from 'src/app/services/pecas/peca.service';
import { Fornecedor } from 'src/app/model/fornecedor/fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor/fornecedor.service';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-pecas-forms-cadastro',
  templateUrl: './pecas-forms-cadastro.component.html',
  styleUrls: ['./pecas-forms-cadastro.component.scss']
})
export class PecasFormsCadastroComponent implements OnInit {

  peca: Pecas;
  foto!: File;
  sucessoFeedback: boolean = false;
  errorsFeedback?: string = '';
  id?: number;
  fornecedores?: Fornecedor[];

  constructor(
    private service: PecaService,
    private router: Router,
    private fornecedorService: FornecedorService, 
    private authService: AuthServiceService) {
    this.peca = new Pecas();
    this.foto = new File([], '');

    const clienteLogado = authService.getAuthUser();
    const tipoUser = authService.getTipoUser();
    console.log(tipoUser);
    console.log(clienteLogado);
    
    
    if (clienteLogado !== null && tipoUser !== undefined && tipoUser != 'CLIENTE') {
    } else{
      this.router.navigate(['cliente/login']);

    }
  }

  ngOnInit(): void {
    this.fornecedorService.getFornecedor().subscribe(
      response => {
        this.fornecedores = response;
      }
    )
    this.id = this.service.getPecaId();
    if (this.id) {
      this.service.getPecaById(this.id).subscribe(
        response => {
          this.peca = response
        },
        errorResponse => {
          this.peca = new Pecas();
        }
      )
    }
  }

  onFileChange(event: any) {
    this.foto = event.target.files[0];
  }

  getFotoUrl(peca: Pecas): string {
    if (peca.base64) {
      return `data:image/jpeg;base64,${peca.base64}`;
    }
    return ''; // Ou uma URL de imagem padrão
  }

  salvarPeca() {
    if(this.id) {
      this.service.atualizarPeca(this.peca).subscribe(
        resposne => {
          this.sucessoFeedback = true;
          this.errorsFeedback = '';
          setTimeout(() => {
            this.sucessoFeedback = false;
          }, 7000);
        },
        errorResponse => {
          this.errorsFeedback = errorResponse.error.mensagem;
        }
      )
    } else {
      this.service.cadastrarPeca(this.peca, this.foto)
      .subscribe(
        response => {
          this.sucessoFeedback = response.mensagem;
          this.errorsFeedback = '';
          setTimeout(() => {
            this.sucessoFeedback = false;
          }, 7000);
          console.log(response);
        },
        errorResponse => {
          this.sucessoFeedback = false;
          this.errorsFeedback = errorResponse.error.mensagem;
          console.log(errorResponse, "ERRO");
        }
      );
    }

  }

  voltarListagem(): void {
    this.router.navigate(['funcionario/lista-pecas']);
  }
}
