import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteFormCadastroComponent } from './templates/cliente-form-cadastro/cliente-form-cadastro.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteFormPerfilComponent } from './templates/cliente-form-perfil/cliente-form-perfil.component';
import { ClientesListaComponent } from './templates/clientes-lista/clientes-lista.component';
import { ClientePageComponent } from './page/cliente-page/cliente-page.component';



@NgModule({
  declarations: [
    ClienteFormCadastroComponent,
    ClienteFormPerfilComponent,
    ClientesListaComponent,
    ClientePageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ClientesRoutingModule,
    FormsModule,
  ],
  exports: [
    ClienteFormCadastroComponent,
    ClienteFormPerfilComponent,
    ClientesListaComponent
  ]
})
export class ClientesModule { }
