import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PecaService } from 'src/app/services/pecas/peca.service';

@Component({
  selector: 'app-pecas-detalhes',
  templateUrl: './pecas-detalhes.component.html',
  styleUrls: ['./pecas-detalhes.component.scss']
})
export class PecasDetalhesComponent {
  pecaDetalhado: any;

  constructor(
    private route: ActivatedRoute,
    private service: PecaService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      // Use um serviço para buscar os detalhes com base no ID
      this.service.getPecaById(id).subscribe((data) => {
        this.pecaDetalhado = data;
      });
    });
  }
}
