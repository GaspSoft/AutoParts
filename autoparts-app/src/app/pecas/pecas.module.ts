import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PecasCardsComponent } from './template/pecas-cards/pecas-cards.component';
import { FormsModule } from '@angular/forms';
import { PecasListagemComponent } from './template/pecas-listagem/pecas-listagem.component';



@NgModule({
  declarations: [
    PecasCardsComponent,
    PecasListagemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PecasCardsComponent,
    PecasListagemComponent,
  ]
})
export class PecasModule { }
