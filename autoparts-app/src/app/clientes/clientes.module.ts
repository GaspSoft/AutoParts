import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroCLienteComponent } from './pages/cadastro-cliente/cadastro-cliente.component';
import { ClienteFormCadastroComponent } from './templates/cliente-form-cadastro/cliente-form-cadastro.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    CadastroCLienteComponent,
    ClienteFormCadastroComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    CadastroCLienteComponent,
    ClienteFormCadastroComponent
  ]
})
export class ClientesModule { }
