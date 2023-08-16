import { ComponentsModule } from './../components/components.module';
import { FornecedoresRoutingModule } from './fornecedores-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedoresListaComponent } from './templates/fornecedores-lista/fornecedores-lista.component';
import { FornecedorFormCadastroComponent } from './templates/fornecedor-form-cadastro/fornecedor-form-cadastro.component';

@NgModule({
  declarations: [
    FornecedoresListaComponent,
    FornecedorFormCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    FornecedoresRoutingModule,
  ],
})
export class FornecedorModule {}
