import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/model/funcionario/funcionario';
import { FuncionariosService } from 'src/app/services/funcionario/funcionarios.service';

@Component({
  selector: 'app-funcionarios-lista',
  templateUrl: './funcionarios-lista.component.html',
  styleUrls: ['./funcionarios-lista.component.scss']
})
export class FuncionariosListaComponent implements OnInit {
  funcionarios: Funcionario[] = [];

  constructor(
    private service: FuncionariosService) { }

  ngOnInit(): void {
    this.service.listarFuncionarios().subscribe(
      response => {
        this.funcionarios = response;
      }
    )
  }
}
