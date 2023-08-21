import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PecasCardsComponent } from './template/pecas-cards/pecas-cards.component';
import { FormsModule } from '@angular/forms';
import { PecasListagemComponent } from './template/pecas-listagem/pecas-listagem.component';
import { PecasAlterarComponent } from './template/pecas-alterar/pecas-alterar.component';



@NgModule({
  declarations: [
    PecasCardsComponent,
    PecasListagemComponent,
    PecasAlterarComponent
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
