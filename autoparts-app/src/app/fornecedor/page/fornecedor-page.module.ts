import { FornecedoresPageRoutingModule } from './fornecedor-page-routing.module';
import { FornecedorPageComponent } from './fornecedor-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedorModule } from '../fornecedores.module';



@NgModule({
  declarations: [
    FornecedorPageComponent
  ],
  imports: [
    CommonModule,
    FornecedorModule,
    FornecedoresPageRoutingModule
  ]
})
export class FornecedorPageModule { }
