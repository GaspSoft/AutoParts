import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PecasCardsComponent } from './template/pecas-cards/pecas-cards.component';



@NgModule({
  declarations: [
    PecasCardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PecasCardsComponent
  ]
})
export class PecasModule { }
