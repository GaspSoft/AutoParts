import { Component, OnInit } from '@angular/core';
import { Pecas } from 'src/app/model/pecas/pecas';
import { PecaService } from 'src/app/services/pecas/peca.service';

@Component({
  selector: 'app-pecas-cards',
  templateUrl: './pecas-cards.component.html',
  styleUrls: ['./pecas-cards.component.scss']
})
export class PecasCardsComponent {
  constructor(private pecaService: PecaService) {
    this.peca = new Pecas();
    this.foto = new File([], '');
  }

  peca: Pecas;
  foto!: File;
  sucessoFeedback: boolean = false;
  errorsFeedback?: string = '';
  id?: number;
  
  
  onFileChange(event: any) {
    this.foto = event.target.files[0];
  }


  salvarPeca() {
    this.pecaService.cadastrarPeca(this.peca, this.foto)
      .subscribe(
        response => {
          console.log('Peça salva com sucesso!', response);
        },
        error => {
          console.error('Erro ao salvar peça:', error);
        }
      );
  }

  

//   onSubmit(): void {
    

//     this.service.cadastrarPeca(this.peca).subscribe(
//       (data) => {
//         this.sucessoFeedback = true;
//         this.errorsFeedback = '';
//         setTimeout(() => {
//           this.sucessoFeedback = false;
//         }, 7000);
//       },
//       (error) => {
//         this.sucessoFeedback = false;
//         this.errorsFeedback = error.error.message;
//       }
//     );
    
    

  
// }
}