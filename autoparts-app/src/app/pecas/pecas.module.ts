import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PecasCardsComponent } from './template/pecas-cards/pecas-cards.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PecasCardsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PecasCardsComponent
  ]
})
export class PecasModule { }
