import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosPageRoutingModule } from './funcionarios-page-routing.module';
import { FuncionariosModule } from '../../funcionarios.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FuncionariosPageRoutingModule,
    FuncionariosModule
  ]
})
export class FuncionarioPageModule { }
