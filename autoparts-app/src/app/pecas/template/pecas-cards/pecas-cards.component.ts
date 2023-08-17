import { Component, OnInit } from '@angular/core';
import { Pecas } from 'src/app/model/pecas/pecas';
import { PecaService } from 'src/app/services/pecas/peca.service';

@Component({
  selector: 'app-pecas-cards',
  templateUrl: './pecas-cards.component.html',
  styleUrls: ['./pecas-cards.component.scss']
})
export class PecasCardsComponent {
  constructor(private service: PecaService) {
    this.peca = new Pecas();
  }

  peca: Pecas;
  sucessoFeedback: boolean = false;
  errorsFeedback?: string = '';
  id?: number;
  
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const foto = event.target.files[0];

      const formData = new FormData();
      formData.append('foto', foto);

      this.peca.foto = foto; 
    }
  }
  
  onSubmit(): void {
    const formData = new FormData();
formData.append('nome', this.peca.nome || '');
formData.append('descricao', this.peca.descricao || '');
formData.append('quantidade', this.peca.quantidade?.toString() || '');
formData.append('foto', this.peca.foto as Blob); // Certifique-se de que 'peca.foto' é uma Blob
formData.append('marca', this.peca.marca || '');
formData.append('ano', this.peca.ano?.toString() || '');
formData.append('preco', this.peca.preco?.toString() || '');
formData.append('modelo', this.peca.modelo || '');
formData.append('fornecedor_id', this.peca.fornecedor?.fornecedor_id?.toString() || '');




    this.service.cadastrarPeca(formData).subscribe(
      (data) => {
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
}