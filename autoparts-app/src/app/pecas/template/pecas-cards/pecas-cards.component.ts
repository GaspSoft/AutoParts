import { Component } from '@angular/core';
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

  ngOnInit():void {
    this.id = this.service.getPecaId()
    if(this.id){
    this.service.listarPecasPorId(this.id).subscribe(
      (data) => {
        this.sucessoFeedback = true;
        this.errorsFeedback = '';
        this.peca = new Pecas();
      },
      (error) => {
        this.sucessoFeedback = false;
        this.errorsFeedback = error.error.message;
      }
    );
  }
  }

  onSubmit(): void {
    if(this.id){
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
    else {
    this.service.atualizarPeca(this.peca).subscribe(
      (data) => {
        this.sucessoFeedback = true;
        this.errorsFeedback = '';
        this.peca = data;
        setTimeout(() => {
          this.sucessoFeedback = false;
        }, 7000);
      },
      errorResponse => {
        this.sucessoFeedback = false;
        this.errorsFeedback = errorResponse.error.errors;
      }
    );
    }

  
}
}