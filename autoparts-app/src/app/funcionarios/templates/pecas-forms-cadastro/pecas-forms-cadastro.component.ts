import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pecas } from 'src/app/model/pecas/pecas';
import { PecaService } from 'src/app/services/pecas/peca.service';
import { Fornecedor } from 'src/app/model/fornecedor/fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor/fornecedor.service';

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
    private fornecedorService: FornecedorService) {
    this.peca = new Pecas();
    this.foto = new File([], '');
  }

  ngOnInit(): void {
    this.fornecedorService.getFornecedor().subscribe(
      response => {
        this.fornecedores = response;
      }
    )
  }

  onFileChange(event: any) {
    this.foto = event.target.files[0];
  }


  salvarPeca() {
    this.service.cadastrarPeca(this.peca, this.foto)
      .subscribe(
        response => {
          this.sucessoFeedback = true;
        this.errorsFeedback = '';
        setTimeout(() => {
          this.sucessoFeedback = false;
        }, 7000);
      },
      (error) => {
        this.sucessoFeedback = false;
        this.errorsFeedback = error.error.message;
        }
      );
  }

  voltarListagem(): void {
    this.router.navigate(['funcionario/lista-pecas']);
  }
}
