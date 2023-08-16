import { FornecedoresPageRoutingModule } from './fornecedor-page-routing.module';
import { FornecedorPageComponent } from './fornecedor-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedorModule } from '../fornecedores.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    FornecedorPageComponent
  ],
  imports: [
    CommonModule,
    FornecedorModule,
    ComponentsModule,
    FornecedoresPageRoutingModule
  ]
})
export class FornecedorPageModule { }
