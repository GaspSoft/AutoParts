import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteFormCadastroComponent } from './templates/cliente-form-cadastro/cliente-form-cadastro.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteFormPerfilComponent } from './templates/cliente-form-perfil/cliente-form-perfil.component';
import { ClientesListaComponent } from './templates/clientes-lista/clientes-lista.component';
import { ClientePageComponent } from './page/cliente-page/cliente-page.component';
import { ClienteSobreComponent } from './templates/cliente-sobre/cliente-sobre.component';



@NgModule({
  declarations: [
    ClienteFormCadastroComponent,
    ClienteFormPerfilComponent,
    ClientesListaComponent,
    ClientePageComponent,
    ClienteSobreComponent
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
    ClientesListaComponent,
    ClienteSobreComponent
  ]
})
export class ClientesModule { }
