import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioPageRoutingModule } from './funcionario-page-routing.module';
import { FuncionariosModule } from '../../funcionarios.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FuncionarioPageRoutingModule,
    FuncionariosModule
  ]
})
export class FuncionarioPageModule { }
