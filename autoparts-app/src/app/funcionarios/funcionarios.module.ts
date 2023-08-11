import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioFormCadastroComponent } from './templates/funcionario-form-cadastro/funcionario-form-cadastro.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FuncionarioFormCadastroComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule
  ],
  exports: [
    FuncionarioFormCadastroComponent,
  ]
})
export class FuncionariosModule { }
