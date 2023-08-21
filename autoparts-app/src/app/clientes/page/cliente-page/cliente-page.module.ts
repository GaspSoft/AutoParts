import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientePageRoutingModule } from './cliente-page-routing.module';
import { ClientesModule } from '../../clientes.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientePageRoutingModule,
    ClientesModule
  ]
})
export class ClientePageModule { }
