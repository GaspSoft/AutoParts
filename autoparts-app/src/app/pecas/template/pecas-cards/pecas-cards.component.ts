import { Component } from '@angular/core';
import { Pecas } from 'src/app/model/pecas/pecas';

@Component({
  selector: 'app-pecas-cards',
  templateUrl: './pecas-cards.component.html',
  styleUrls: ['./pecas-cards.component.scss']
})
export class PecasCardsComponent {
    pecas = new Pecas();
}
