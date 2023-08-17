import { Component, OnInit } from '@angular/core';
import { Pecas } from 'src/app/model/pecas/pecas';
import { PecaService } from 'src/app/services/pecas/peca.service';

@Component({
  selector: 'app-pecas-cards',
  templateUrl: './pecas-cards.component.html',
  styleUrls: ['./pecas-cards.component.scss']
})
export class PecasCardsComponent implements OnInit {
  constructor(private service: PecaService) {
    this.peca = new Pecas();
  }

  peca: Pecas;
  sucessoFeedback: boolean = false;
  errorsFeedback?: string = '';
  id?: number;

  ngOnInit(): void {
    this.id = this.service.getPecaId();
    if (this.id) {
      this.service.listarPecasPorId(this.id).subscribe(
        (data) => {
          this.sucessoFeedback = true;
          this.errorsFeedback = '';
          this.peca = data; // Atualizar a peça com os dados recebidos do serviço
        },
        (error) => {
          this.sucessoFeedback = false;
          this.errorsFeedback = error.error.message;
        }
      );
    }
  }
  

  onSubmit(): void {
    
    this.service.cadastrarPeca(this.peca).subscribe(
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